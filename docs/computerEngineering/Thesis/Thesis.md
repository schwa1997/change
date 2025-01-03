---
sidebar_position: 1
title: Thesis
---

## Title

**A Preliminary Study on Vowel Recognition using Convolutional Neural Networks for Individuals with Speech Disorders in the Italian Language**

## Abstract

Abstract: This study addresses the issue of speech and listening impairments, highlighting the potential for improvement through targeted training. The University of Padua's Computer engineering for music and multimedia (CSC) Lab is developing an online service, SoundRise, to help individuals refine their pronunciation skills. The platform provides a user-friendly interface for identifying vowel pitch and volume through audio analysis. As artificial intelligence continues to gain attention and improve various industries, this thesis aims to investigate the feasibility of integrating AI into this training service SoundRise. By incorporating AI training into vowel recognition, this thesis seeks to contribute to speech rehabilitation, offering a direct approach to learning and evaluating speech. This research explores vowel recognition in Italian using Convolutional Neural Networks (CNNs) and introduces a new dataset covering five vowels (/a/, /e/, /i/, /o/, and /u/) for future applications. The results demonstrate the effectiveness of this system in recognizing vowel types, potentially enhancing outcomes for individuals with speech disorders.

Italian Abstract: Questo studio affronta il problema delle difficoltà di parola e di ascolto, evidenziando il potenziale miglioramento attraverso un addestramento mirato. Il Laboratorio di Ingegneria Informatica per la Musica e i Multimedia (CSC) dell'Università di Padova sta sviluppando un servizio online, SoundRise, per aiutare le persone a perfezionare le proprie competenze di pronuncia. La piattaforma offre un'interfaccia intuitiva per identificare il tono e il volume delle vocali tramite analisi audio. Poiché l'intelligenza artificiale continua a suscitare interesse e a migliorare vari settori, questa tesi mira a indagare la fattibilità dell'integrazione dell'IA in questo servizio di addestramento, SoundRise. Integrando l'addestramento basato sull'IA nel riconoscimento delle vocali, la tesi si propone di contribuire alla riabilitazione del linguaggio, offrendo un approccio diretto all'apprendimento e alla valutazione del parlato. La ricerca esplora il riconoscimento delle vocali in italiano utilizzando reti neurali convoluzionali (CNN) e introduce un nuovo dataset che copre cinque vocali (/a/, /e/, /i/, /o/ e /u/) per applicazioni future. I risultati dimostrano l'efficacia di questo sistema nel riconoscimento dei tipi di vocali, con il potenziale di migliorare i risultati per le persone con disturbi del linguaggio.

## Keywords

CNN, Italian language, speech training, speech disorders, vowel recognition

## Introduction

Speech disorders are a significant health problem affecting millions of people worldwide. According to the World Health Organization, about 5% of children have speech development disorders [1]. Among them, congenital hearing impairment is one of the main causes of delayed speech development. These children often have difficulty developing language skills naturally because they cannot receive sound feedback normally.

Speech rehabilitation training is critical to the language development of these children. Research shows that early intervention and systematic speech training can significantly improve the language ability of children [2]. In speech training, vowel training is considered to be the most basic and critical link, because vowels are the basic unit of language and have an important impact on speech intelligibility [3].

Based on this background, this study develops a web-based speech training platform. This platform is an innovative upgrade based on the existing projects of the CSC Laboratory of the University of Padua. It mainly includes improvements in two aspects:

1. Optimize the user interface and interactive experience to make the platform more suitable for children
2. Introducing an intelligent speech recognition system based on convolutional neural network (CNN)

The main innovations of this study include:

- Proposed a sound information extraction method based on spectrogram
- Created a new dataset containing the five vowels of Italian, which contains multiple sound length samples from speakers of different genders
- Verified the effectiveness of the proposed dataset on the CNN model

## Related Works

The development of speech recognition technology has experienced an evolution from traditional methods to deep learning methods. Early research mainly relied on acoustic feature extraction and statistical models [4]. In recent years, deep learning, especially CNN, has made significant progress in the field of speech recognition [5]. However, through experimental comparison, it was found that in specific vowel recognition tasks, the traditional method still showed high accuracy and efficiency. This may be due to the relative simplicity of vowel features, which traditional methods have been able to capture well.

## Proposed Method

A. Audio generation and collection

- Establish a standardized recording environment
- Design diverse sampling plans

B. Waveform signal to image processing

- Generate spectrograms using short-time Fourier transform
- Image preprocessing and normalization

C. Dataset construction

- Collect speech samples from multiple speakers
- Data enhancement and cleaning

D. Network model training and evaluation

- CNN model architecture design
- Training parameter optimization
- Cross validation

E. Comparative analysis with traditional methods

- Accuracy comparison
- Comparison of computational efficiency
  -Assessment of actual application scenarios

## Results

(Detailed experimental results to be added)

##Conclusion

(To be supplemented by research conclusions)

## Future Work

In the future, the laboratory can further develop a speech-based AI training system based on this CNN model for speech training.

- Collect more audio data from real people for training and testing
- Collect more audio data from different languages ​​for training and testing
- Collect more audio data from different age groups for training and testing
- Collect more audio data from different genders and different accents for training and testing
- In image conversion, you can focus on the features of the spectrogram that are most related to vowels, such as the shape of the spectrogram, the energy distribution of the spectrogram, the frequency distribution of the spectrogram, etc.
- In model training, you can try to use more models, such as Transformer model, LSTM model, etc., to improve the performance of the model.
- In model evaluation, you can try to use more evaluation indicators, such as F1 score, accuracy, recall, precision, etc., to evaluate the performance of the model.

References

[1] World Health Organization. (2021). World report on hearing.

[2] Johnson, C. J., & Beitchman, J. H. (2006). Language development and literacy: Early identification of language delay.

[3] Peterson, G. E., & Barney, H. L. (1952). Control methods used in a study of the vowels.

[4] Rabiner, L., & Juang, B. H. (1993). Fundamentals of speech recognition.

[5] Zhang, X., et al. (2017). Deep learning for speech recognition: A comprehensive review.
