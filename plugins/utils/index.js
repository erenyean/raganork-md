// Import all modules
const dbOperations = require('./db/functions');
const mediaProcessing = require('./mediaProcessors');
const utils = require('./misc');
const language = require('./manglish');

// Grouped database operations
const {
    getWarn, setWarn, resetWarn, decrementWarn, getWarnCount, getAllWarns,
    antilink, antiword, antifake,
    antipromote, antidemote, antispam,
    antibot, pdm, welcome, goodbye, filter
} = dbOperations;

// Media processing functions
const {
    addExif, bass, circle, blur, attp,
    aadhar, sticker, rotate, avMix, webp2mp4
} = mediaProcessing;

// Utility functions
const {
    parseUptime, isNumeric, isAdmin,
    mentionjid, getJson, bytesToSize,
    isFake, 
    processOnwa, findMusic, searchYT,
    downloadGram, pin, fb, igStalk,
    tiktok, story, getThumb, gtts, getBuffer
} = utils;

// Language functions
const { malayalamToManglish, manglishToMalayalam } = language;

const aiTTS = require('./ai-tts');

const {gis, pinSearch} = require('./gis');

const { uploadToImgbb, uploadToCatbox } = require('./upload');

module.exports = {
    // Database Operations
    getWarn, setWarn, resetWarn, decrementWarn, getWarnCount, getAllWarns,
    antilink, antiword, antifake,
    antipromote, antidemote, antispam,
    antibot, pdm, welcome, goodbye, filter,

    // Media Processing
    addExif, bass, circle, blur, attp,
    aadhar, sticker, rotate, avMix, webp2mp4,

    // Utilities
    parseUptime, isNumeric, isAdmin,
    mentionjid, getJson, bytesToSize,
    isFake, aiTTS,
    processOnwa, findMusic, searchYT,
    downloadGram, pin, fb, igStalk,
    tiktok, story, getThumb, gtts, getBuffer,

    // Language
    malayalamToManglish, manglishToMalayalam,

    // GIS
    gis, pinSearch,

    // File Upload
    uploadToImgbb, uploadToCatbox
};