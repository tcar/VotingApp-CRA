import Poll from '../models/poll';

//get all polls
const getPolls = (req, res) => {
    
    Poll.find({},(err, polls) =>{
        if (err){
            res.send(err);
        }
        res.json(polls)
    } )
}


//get poll by id
const getPoll = (req, res) => {
    
    const {id} = req.params;
    
    Poll.findById(id,(err, poll) =>{
        if (err){
            res.send(err);
        }
        res.json(poll)
    } )
}

//get body data and create new poll

const postPoll = (req, res) => {
    let poll = Object.assign(new Poll(), req.body);

    poll.save(err => {
        if(err){
            res.send(err)
        }
        res.json({poll})
    })
}


//delete poll by id


const deletePoll = (req, res) => {
    Poll.remove(
        {
            _id : req.params.id
        },
        (err,re) =>{
            if (err){
                res.send(err);
            }
            res.json({message:'succesfully deleted'})
        }
    )
}


//add vote(voting)

const putVote = (req, res) => {
    
    Poll.findOneAndUpdate({'options._id':req.params.vote},
    {$inc:{'options.$.votes': 1}},
    {new: true}

    ,(err,red)=>{
        if(err){
            res.send(err)
        }
        res.json(red)
    })
}

//get votes

const vote = (req, res) => {
  
  Poll.find({'options._id': req.params.vote}, (err, polls) =>{
        if (err){
            res.send(err);
        }
        res.json(polls)
    }) 
  
}


export {getPolls, getPoll, postPoll, deletePoll, putVote, vote};



