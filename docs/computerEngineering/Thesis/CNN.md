---
sidebar_position: 2
title: CNN
---

## CNN model 
1. CNN 的基本结构
CNN 主要由以下几层组成：

- 卷积层（Convolutional Layer）：使用卷积核（filter）对输入图像进行特征提取。初层提取低级特征（如边缘、纹理），深层提取高级特征（如形状、物体）。
- 池化层（Pooling Layer）：减少特征图尺寸，提高计算效率，增强模型对平移、缩放等变化的鲁棒性。
- 全连接层（Fully Connected Layer, FC）：连接到最终的分类器或回归模型，输出最终结果。




## Model Code 
```python
def build_simple_model():
    model = models.Sequential([
        # Input Layer
        layers.Input(shape=(IMG_SIZE[0], IMG_SIZE[1], 1)),

        # First Convolutional Block
        layers.Conv2D(32, 3, padding='same', activation='relu'),
        layers.BatchNormalization(),
        layers.MaxPooling2D(),

        # Second Convolutional Block
        layers.Conv2D(64, 3, padding='same', activation='relu'),
        layers.BatchNormalization(),
        layers.MaxPooling2D(),

        # Third Convolutional Block
        layers.Conv2D(128, 3, padding='same', activation='relu'),
        layers.BatchNormalization(),
        layers.MaxPooling2D(),

        # Classification Head
        layers.GlobalAveragePooling2D(),
        layers.Dropout(0.3),
        layers.Dense(64, activation='relu'),
        layers.BatchNormalization(),
        layers.Dense(NUM_CLASSES, activation='softmax')
    ])
```

首先，模型是使用Keras的Sequential API构建的，这说明它是一个线性的层堆叠结构。
输入层的形状是IMG_SIZE指定的单通道图像，可能用于灰度图像的处理。

接下来有三个卷积块，每个块的结构都是Conv2D + BatchNormalization + MaxPooling2D。然后分类头部分包括GlobalAveragePooling2D、Dropout、Dense层、BatchNorm，最后是输出层。

### 特点
- 卷积块的逐渐增加滤波器数量，32、64、128，这样随着网络加深，特征图的通道数增加，而空间尺寸由于池化逐渐减小，这符合典型CNN的设计模式，逐渐提取更复杂的特征，同时减少计算量。
- 每个卷积层后面都跟了BatchNormalization，这有助于加速训练，减少内部协变量偏移，可能提高模型的收敛速度和稳定性。MaxPooling2D则用来下采样，降低维度，增加感受野，同时提供一定的平移不变性。
- 第三个卷积块之后，使用全局平均池化（GlobalAveragePooling2D）代替了全连接层，这可以减少参数量，防止过拟合，同时将空间特征转换为通道的均值，可能提高模型的泛化能力。之后有一个Dropout层，丢弃率0.3，这可以进一步防止过拟合，尤其是在全连接层之前使用。
- 接下来的Dense层有64个单元，使用ReLU激活，之后又接了一个BatchNormalization，这可能是在全连接层之后进一步标准化，不过通常BatchNorm在激活函数之前使用，但这里用户是在Dense之后，可能需要确认是否有误，但根据代码来看，顺序是Dense→激活→BN，或者这里的代码是否写反了？比如通常应该是Dense→BN→激活，不过代码里Dense的activation已经设置为relu，所以BN是在Dense+ReLU之后应用的。这可能不太常见，但也许用户有意如此，或者可能有不同的考虑，比如在激活之后进行BN，但可能影响效果。不过这可能是一个需要注意的点，但用户提供的代码是这样的结构。

- 最后的输出层使用softmax激活，对应多分类问题，NUM_CLASSES个类别。
