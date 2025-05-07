
/**
 * Calculates the meeting cost based on participants and elapsed time
 * @param participants Number of participants in the meeting
 * @param seconds Elapsed time in seconds
 * @returns Cost in Norwegian Kroner (NOK)
 */
export const calculateCost = (participants: number, seconds: number): number => {
  // Each participant costs 1000 NOK per hour
  // Convert seconds to hours and multiply by cost per hour per participant
  const hours = seconds / 3600;
  const cost = participants * 1000 * hours;
  return cost;
};

/**
 * Formats a number as Norwegian Kroner
 * @param amount Amount to format
 * @returns Formatted string with NOK currency
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('no-NO', {
    style: 'currency',
    currency: 'NOK',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};
