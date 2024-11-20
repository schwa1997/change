import React from "react";
import styles from "./CryptoStats.module.css";

interface Trade {
  date: string;
  asset: string;
  type: "Buy" | "Sell";
  amount: number;
  returnRate?: number;
  return?: number;
  days?: number;
}

const CryptoStats: React.FC = () => {
  const trades: Trade[] = [
    { date: "2024-11-19", asset: "CLV", type: "Buy", amount: 100 },
    {
      date: "2024-11-20",
      asset: "CLV",
      type: "Sell",
      amount: 138.83,
      returnRate: 38.83,
      return: 38.83,
      days: 1,
    },
    { date: "2024-11-13", asset: "TRB", type: "Buy", amount: 100 },
    { date: "2024-11-07", asset: "TRB", type: "Buy", amount: 500 },
    {
      date: "2024-11-10",
      asset: "TRB",
      type: "Sell",
      amount: 690.75,
      returnRate: 38.15,
      return: 190.75,
      days: 3,
    },
    { date: "2024-10-03", asset: "ETH", type: "Buy", amount: 100 },
    { date: "2024-10-26", asset: "ETH", type: "Buy", amount: 100 },
    { date: "2024-11-05", asset: "ETH", type: "Buy", amount: 100 },
    { date: "2024-08-09", asset: "ETH", type: "Buy", amount: 100 },
    { date: "2024-08-09", asset: "ETH", type: "Buy", amount: 100 },
    { date: "2024-11-07", asset: "ETH", type: "Sell", amount: 402.37 },
    {
      date: "2024-11-07",
      asset: "ETH",
      type: "Sell",
      amount: 134.09,
      returnRate: 7.29,
      return: 36.46,
      days: 55,
    },
    { date: "2024-08-05", asset: "BTC", type: "Buy", amount: 100 },
    { date: "2024-08-02", asset: "BTC", type: "Buy", amount: 50 },
    {
      date: "2024-08-09",
      asset: "BTC",
      type: "Sell",
      amount: 160.08,
      returnRate: 6.72,
      return: 10.08,
      days: 4,
    },
  ];

  const calculateStats = () => {
    const totalProfit = trades
      .filter((trade) => trade.return)
      .reduce((sum, trade) => sum + (trade.return || 0), 0);

    const averageReturn =
      trades
        .filter((trade) => trade.returnRate)
        .reduce((sum, trade) => sum + (trade.returnRate || 0), 0) /
      trades.filter((trade) => trade.returnRate).length;

    const totalInvestment = trades
      .filter((trade) => trade.type === "Buy")
      .reduce((sum, trade) => sum + trade.amount, 0);

    const totalValue = trades
      .filter((trade) => trade.type === "Sell")
      .reduce((sum, trade) => sum + trade.amount, 0);
    const dayCount = trades.reduce((sum, trade) => sum + (trade.days || 0), 0);
    return {
      totalProfit,
      averageReturn,
      totalInvestment,
      totalValue,
      dayCount,
    };
  };

  const stats = calculateStats();

  return (
    <>
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <h3>Total Investment</h3>
          <p className={styles.value}>€{stats.totalInvestment.toFixed(2)}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Total Value</h3>
          <p className={styles.value}>€{stats.totalValue.toFixed(2)}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Total Profit</h3>
          <p className={styles.value}>€{stats.totalProfit.toFixed(2)}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Avg. Return Rate</h3>
          <p className={styles.value}>{stats.averageReturn.toFixed(2)}%</p>
        </div>
        <div className={styles.statCard}>
          <h3>Days Held</h3>
          <p className={styles.value}>{stats.dayCount}</p>
        </div>
      </div>
      <div>
        <h3>Trade History</h3>
        <table className={styles.tradeTable}>
          <thead>
            <tr className={styles.tableHeader}>
              <th className={styles.tableCell}>Date</th>
              <th className={styles.tableCell}>Asset</th>
              <th className={styles.tableCell}>Type</th>
              <th className={`${styles.tableCell} ${styles.rightAlign}`}>
                Amount
              </th>
              <th className={`${styles.tableCell} ${styles.rightAlign}`}>
                Return Rate
              </th>
              <th className={`${styles.tableCell} ${styles.rightAlign}`}>
                Return
              </th>
              <th className={`${styles.tableCell} ${styles.rightAlign}`}>
                Days
              </th>
            </tr>
          </thead>
          <tbody>
            {trades
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((trade, index) => (
                <tr
                  key={index}
                  className={`${styles.tableRow} ${
                    trade.type === "Sell" ? styles.sellRow : ""
                  }`}
                >
                  <td className={styles.tableCell}>{trade.date}</td>
                  <td className={styles.tableCell}>{trade.asset}</td>
                  <td className={styles.tableCell}>{trade.type}</td>
                  <td className={`${styles.tableCell} ${styles.rightAlign}`}>
                    €{trade.amount.toFixed(2)}
                  </td>
                  <td className={`${styles.tableCell} ${styles.rightAlign}`}>
                    {trade.returnRate ? `${trade.returnRate.toFixed(2)}%` : "-"}
                  </td>
                  <td className={`${styles.tableCell} ${styles.rightAlign}`}>
                    {trade.return ? `€${trade.return.toFixed(2)}` : "-"}
                  </td>
                  <td className={`${styles.tableCell} ${styles.rightAlign}`}>
                    {trade.days || "-"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CryptoStats;
