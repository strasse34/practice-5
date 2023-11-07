import React, {useState} from 'react'


function ControledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments);
    }
  return (
    <div>
        <h2>Please fill the form below</h2>
        <form onSubmit={handleSubmit}>
           <div>
            <label htmlFor='id-name'>Your Name:</label>
                <input
                value={name} 
                onChange={(e) => setName(e.target.value)}
                id="id-name" 
                name="name" 
                type="text" />
           </div>
            <div>
                <label htmlFor='id-category'>Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} id='id-category'>
                    <option id='website'>Website Issue</option>
                    <option id='order'>Order Issue</option>
                    <option id='general'>General Issue</option>
                </select>
            </div>
            <div>
                < label htmlFor='id-comment'>Comments:</label>
                <textarea 
                id='id-comment' name='comments'
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                 />
            </div>
            <input type="submit" value="Submit" />

        </form>
      </div>
  )
}

export default ControledFormHooks