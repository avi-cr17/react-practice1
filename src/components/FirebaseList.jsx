import React, { useEffect, useState } from 'react'

const FirebaseList = (props) => {

    const initialValues = {
        Name:'',
        Type:'',
        Position:'',
        Club:'',
        Nationality:'',
        Price:'',
        Rating:''
    }

    const [values,setValues] = useState(initialValues);

   useEffect(() => {
        if (props.currentID == '')
            setValues({ ...initialValues })
        else
            setValues({
                ...props.playerList[props.currentID]
            })

            console.log("table component",props.currentID,props.playerList)

    }, [props.currentID, props.playerList])



    const SubmitHandler = (e)=>{
        e.preventDefault();
        props.addorEdit(values);
       //console.log(values);
    }

    const handleInputChange = e => {
        var { placeholder, value } = e.target;
        //console.log(e.target.placeholder);
        setValues({
            ...values,
            [placeholder]: value
        })
    }



    return (
        <>
        
            <h3>Form</h3>
            <form  onSubmit={SubmitHandler}>
                
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Name</span>
                 </div>
                <input  type="text" className="form-control" value={values.Name} placeholder="Name" aria-label="Username" onChange={handleInputChange}/>
                </div>
                <div className="form-group row my-2">
                <div className="col-sm-6"><input type="text" value={values.Type} className="form-control" placeholder="Type" onChange={handleInputChange}/></div>
                <div className="col-sm-6"><input type="text" value={values.Position} className="form-control" placeholder="Position" onChange={handleInputChange}/></div>
                </div>
                <div className="form-group row">
                <div className="col-sm-6"><input type="text" value={values.Club} className="form-control" placeholder="Club" onChange={handleInputChange}/></div>
                <div className="col-sm-6"><input type="text" value={values.Nationality} className="form-control" placeholder="Nationality" onChange={handleInputChange}/></div>
                </div>
                <div className="form-group row">
                <div className="col-sm-6"><input type="text" value={values.Price} className="form-control" placeholder="Price" onChange={handleInputChange}/></div>
                <div className="col-sm-6"><input type="text" value={values.Rating} className="form-control" placeholder="Rating" onChange={handleInputChange}/></div>
                </div>
                
  
                <button type="submit" className="btn btn-primary mb-2 my-2 col-sm-12">Submit</button>

            </form>
            
        </>
    )
}

export default FirebaseList
