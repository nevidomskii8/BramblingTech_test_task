
module.exports = {
    getState: async (req, res) => {
        try {
            const json = require('../container/state.json')  
            res.status(200).json(json);
        } catch(e) {
            res.status(500).json({
                message: `Server error: ${e}`
            })
        }
    }
}