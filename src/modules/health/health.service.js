export const getHealth = () => ({
    status: 'OK',
    message: 'GameVault está saudável e pronto para TDD! 🚀',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
});
