import React from "react";

const AddService = () => {
    const handleOnSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const desc = form.desc.value;

        const service = {
            title,
            desc
        }

        fetch('https://proshoot-server.vercel.app/addservice',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('service placed successfully')
                form.reset();
                
            }
        })
        .catch(err => console.error(err))
    }
  return (
    <div className="max-w-screen-lg mx-auto my-32">
      <h2 className="text-4xl font-semibold text-center">
        Add Your <span className="myColor">Service</span>
      </h2>
      <form onSubmit={handleOnSubmit} className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-16">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Service Title</span>
          </label>
          <label className="input-group">
            <span>Title</span>
            <input
              type="text"
              name="title"
              placeholder="Enter your service title here"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control mt-6 md:mt-6">
          <label className="label">
            <span className="label-text">Service Description</span>
          </label>
          <label className="input-group">
            <span>Description</span>
            <input
              type="text"
              name="desc"
              placeholder="Enter service description here"
              className="input input-bordered"
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddService;
