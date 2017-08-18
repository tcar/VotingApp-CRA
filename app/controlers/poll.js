
import Poll from '../models/poll';




module.exports = {

getPoll: async (req, res) => {
        const {id} = req.params;
        
        const polls = await Poll.findById(id)
            res.json(polls)
        }, 
 
deletePoll: async (req, res) => {
           const removePoll = await Poll.remove({_id : req.params.id})
                    res.json({message:'succesfully deleted'})
                },

putVote: async (req, res) => {
       const vote = await Poll.findOneAndUpdate({'options._id':req.params.vote},
        {$inc:{'options.$.votes': 1}},
       {new: true})
            res.json(vote)
        }, 
vote: async (req, res) => { 
        const polls = await Poll.find({'options._id': req.params.vote})
                res.json(polls)
        
        }

}


































