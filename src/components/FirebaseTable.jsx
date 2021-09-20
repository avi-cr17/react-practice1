import React,{useState,useEffect} from 'react';
import fireDb from '../Firebase'
import FirebaseList from './FirebaseList';



const FirebaseTable = () => {

    var [playerList,SetPlayerList]=useState({});
    var [currentID,setCurrentID]=useState('');


    useEffect(()=>{

        fireDb.child('players').on('value', snapshot=>{
            
            SetPlayerList({
                ...snapshot.val()
            });
            
            //console.log(snapshot.val())   
        }
        )
        

    },[])

    const addorEdit = (obj)=>{
        if (currentID == '')
            fireDb.child('players').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentID('')
                })
        else
            fireDb.child(`players/${currentID}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentID('')
                })
    }

    const deleteHandler = (id)=>{
        if (window.confirm('Are you sure to delete this record?')) {
            fireDb.child(`players/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentID('')
                })
        }
    }
    

    return (
        <>
       
        <div className="container-fluid row text-center">
          <div  className=" col-xl-3" > <FirebaseList {...({ currentID, playerList, addorEdit})}  /></div>
          
        <div className=" col-xl-9 tab-mar">
            <h3>Firebase Table!</h3>
            <table className="table table-dark offest-1">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Club</th>
                    <th scope="col">Position</th>
                    <th scope="col">Rating</th>
                    <th scope="col">update</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {Object.keys(playerList).map((player,i)=>(
                    
                    <tr key={player}>
                        <td>{playerList[player].Name}</td>
                        <td>{playerList[player].Club}</td>
                        <td>{playerList[player].Position}</td>
                        <td>{playerList[player].Rating}</td>
                        <td onClick={()=>{setCurrentID(player)}}><i class="fa fa-pencil-square-o edit clickable" aria-hidden="true"></i></td>
                        <td onClick={()=>deleteHandler(player)}><i class="fa fa-times delete clickable" aria-hidden="true "></i></td>
                        
                        
                    </tr>
                        ))}


                    

            </tbody>
            </table>
            
            
           
        </div>
          </div>
        </>
    )
}

export default FirebaseTable
