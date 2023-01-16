import React from 'react'
import { Card } from "react-bootstrap";

const Contacts = ({scent}) => {
  return (
    <div>
        <Card border="dark"
            key={scent.id}
            style={{ width: '17rem', background:'white'}}
            className="mb-2"
            text={'black'}>
            <Card.Header style={{background:'cyan', color:'black', fontSize:'25px', height:'120px'}}><b>{scent.name}</b>
              <br /> <span style={{fontSize:'14px'}}> user_name: {scent.username}</span>
            </Card.Header>
            <Card.Body>
                    <Card.Title style={{fontSize:'12px', color:'blue', textAlign:'left'}}> 
                    <span style={{color:'black'}}>Email: </span> {scent.email} <br/>
                    <span style={{color:'black'}}>Address:</span> {scent.address.street}<br/>
                    <span style={{color:'black'}}>Suite:</span> {scent.address.suite}<br/>
                    <span style={{color:'black'}}>City:</span> {scent.address.city}<br/>
                    <span style={{color:'black'}}>☎:</span> {scent.phone}<br/>
                    <span style={{color:'black'}}>Website:</span> {scent.website}<br/>
                    <span style={{color:'black'}}>Company:</span> {scent.company.name}<br/>
                    <span style={{color:'black'}}>Catchphrase: </span>{scent.company.catchPhrase} <br/>
                    <span style={{color:'black'}}>bs:</span> {scent.company.bs}
                    </Card.Title>
            </Card.Body>
        </Card>
                

    </div>
  )
}

export default Contacts