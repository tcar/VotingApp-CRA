
import Poll from '../models/poll';




module.exports = {
getPolls: async (req, res) => {
       const Polls = await Poll.find({})
            res.json(Polls)  
        },
getPoll: async (req, res) => {
        const {id} = req.params;
        
        const Polls = Poll.findById(id)
            res.json(Polls)
        }, 
postPoll: async (req, res) => {
        let poll = Object.assign(new Poll(), req.body);
        const savePoll = await poll.save()
            res.json(savePoll)
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


































