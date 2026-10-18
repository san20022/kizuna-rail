/**
 * Generates a unique Japan Rail-like confirmation code.
 * @returns {string} A unique confirmation code.
 */
const generateConfirmationCode = () => {
    return 'JR' + Math.random().toString(36).substring(2, 10).toUpperCase();
};

/**
 * Converts kilometers to miles.
 * @param {number} km - Distance in kilometers.
 * @returns {number} Distance in miles.
 */
const kmToMiles = (km) => {
    const conversionFactor = 0.621371;
    return km * conversionFactor;
};

/**
 * Converts Japanese Yen to US Dollars.
 * @param {number} yen - Amount in Japanese Yen.
 * @returns {number} Amount in US Dollars, rounded to two decimals.
 */
const yenToUsd = (yen) => {
    const exchangeRate = 0.0066;
    return Number((Number(yen) * exchangeRate).toFixed(2));
};

export { generateConfirmationCode, kmToMiles, yenToUsd };