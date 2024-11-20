import React from 'react';
import styles from './CryptoStats.module.css';

interface Trade {
  date: string;
  asset: string;
  type: 'Buy' | 'Sell';
  amount: number;
  returnRate?: number;
  return?: number;
  days?: number;
}

const CryptoStats: React.FC = () => {
  const trades: Trade[] = [
    { date: '2024-11-19', asset: 'CLV', type: 'Buy', amount: 100 },
    { date: '2024-11-20', asset: 'CLV', type: 'Sell', amount: 138.83, returnRate: 38.83, return: 38.83, days: 1 },
    { date: '2024-11-13', asset: 'TRB', type: 'Buy', amount: 100 },
    { date: '2024-11-07', asset: 'TRB', type: 'Buy', amount: 500 },
    { date: '2024-11-10', asset: 'TRB', type: 'Sell', amount: 690.75, returnRate: 38.15, return: 190.75, days: 3 },
    { date: '2024-10-03', asset: 'ETH', type: 'Buy', amount: 100 },
    { date: '2024-10-26', asset: 'ETH', type: 'Buy', amount: 100 },
    { date: '2024-11-05', asset: 'ETH', type: 'Buy', amount: 100 },
    { date: '2024-08-09', asset: 'ETH', type: 'Buy', amount: 100 },
    { date: '2024-08-09', asset: 'ETH', type: 'Buy', amount: 100 },
    { date: '2024-11-07', asset: 'ETH', type: 'Sell', amount: 402.37 },
    { date: '2024-11-07', asset: 'ETH', type: 'Sell', amount: 134.09, returnRate: 7.29, return: 36.46, days: 55 },
    { date: '2024-08-05', asset: 'ETH', type: 'Buy', amount: 100 },
    { date: '2024-08-02', asset: 'ETH', type: 'Buy', amount: 50 },
    { date: '2024-08-09', asset: 'ETH', type: 'Sell', amount: 160.08, returnRate: 6.72, return: 10.08, days: 4 }
  ];

  const calculateStats = () => {
    const totalProfit = trades
      .filter(trade => trade.return)
      .reduce((sum, trade) => sum + (trade.return || 0), 0);
    
    const averageReturn = trades
      .filter(trade => trade.returnRate)
      .reduce((sum, trade) => sum + (trade.returnRate || 0), 0) / trades.filter(trade => trade.returnRate).length;

    return { totalProfit, averageReturn };
  };

  const stats = calculateStats();

  return (
    <div className={styles.statsContainer}>
      <div className={styles.statCard}>
        <h3>Total Profit</h3>
        <p className={styles.value}>€{stats.totalProfit.toFixed(2)}</p>
      </div>
      <div className={styles.statCard}>
        <h3>Avg. Return Rate</h3>
        <p className={styles.value}>{stats.averageReturn.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default CryptoStats;