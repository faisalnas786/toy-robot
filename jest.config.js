/**
 * For learning more about jest testing package, should be consulted below given link 
 * https://jestjs.io/docs/en/configuration.html
 */
module.exports = { 
    /**
     * test environment used for testing
     */
    testEnvironment: "node",

    /**
     * (true) it will clear mocks calls and 
     * instances between each test automatically
     */
    clearMocks: true,
    
    /**
     * Its the dircetory where jest will output coverage files
     */
    coverageDirectory: "coverage"
};