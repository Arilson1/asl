import React, { useState } from "react";

import './options.css';
import Title from '../../layout/Title';

const Options = (props) => {

const withdrawnValue = props.value
const bankNotes = [200,100,50,20,10,5,2]

var withdrawnBankNotes = []

function getNoteBankValue(value){
  let notesOptions = []
  let notes = [] 
  for (var i=0;i<bankNotes.length;i++){
    let noteDivision = Math.trunc(value/bankNotes[i])
    if(noteDivision === 0)
      continue;
      
    notes.push({
    key: bankNotes[i],
    value: noteDivision
    });
    
    let noteRest = value%bankNotes[i]
    if(noteRest !==0)
        for (var j=i;j<bankNotes.length;j++){
              noteDivision = Math.trunc(noteRest/bankNotes[j])
            if(noteDivision === 0)
                  continue;
            
            notes.push({
            key: bankNotes[j],
            value: noteDivision
            });
            
            noteRest = noteRest%bankNotes[j]
            if(noteRest ===0){
                break;
            }
          }
   notesOptions.push(notes)
   notes = []
   if (notesOptions.length === 3)
       return notesOptions
    }
  return notesOptions
}

const res = getNoteBankValue(withdrawnValue)
 
    return (
        <div className="options">
            <Title title='Opções para saque:' />
            <ul>
                {
                    res.map((item) => (
                        item.map((note) => <li>{`${note["value"]} nota(s) de ${note["key"]}` + '' }</li>)
                    ))
                }
            </ul>
        </div>
    )
}

export default Options;