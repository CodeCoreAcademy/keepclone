import { Box } from '@mui/system'
import React, { useState } from 'react'
import PushPinIcon from '@mui/icons-material/PushPin';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
export default function Notes() {

    const [noteInput, setNoteInput] = useState({
        title:'',
        body:'',
        pinned:false,
        background:'#ffffff',
        image:'',
        last_edit:'',
        label:''
    })

    const [notes, setNotes] = useState([
        {
            id:1,
            'title':'gmail password',
            'body':'76743757854'
        },
        {
            id:2,
            'title':'facebook post',
            'body':'76743757854'
        },
        {
            id:3,
            'title':'gmail password',
            'body':'76743757854'
        },
        {
            id:4,
            'title':'facebook post',
            'body':'76743757854'
        }
    ])

    const save=()=>{
        // console.log(noteInput.body.replace   ('\n', '<br />'))
        // setNoteInput(prev=>({...prev, body:prev.body.replace('\n', '<br />')}) )
        setNotes(prev=>[...prev, noteInput])
        setNoteInput({
            title:'',
            body:'',
            pinned:false,
            background:'#ffffff',
            image:'',
            last_edit:'',
            label:''
        })
    }

    return (
        <div>
            {
                // console.log(noteInput)
            }
            <Box sx={{
                width:'500px', margin:'auto',     
                backgroundColor: '#ffffff',
                padding: '10px',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px 1px #bababa'
            }}>
                <Box sx={{display:'flex', flexDirection:'row'}}>
                    <input type='text' style={{flexGrow:1}} placeholder='Title' value={noteInput.title} onChange={(e)=>setNoteInput(prev=>({...prev, title:e.target.value}))} />
                    <IconButton aria-label="pin" onClick={(e)=>setNoteInput(prev=>({...prev, pinned:!prev.pinned}))}>
                        <PushPinIcon />
                    </IconButton>
                </Box>
                
                {/* <input type='text' style={{width:'100%'}} placeholder='Take a note' /> */}
                <TextField
                    sx={{width:'95%', border:'none', outline:'none', padding:'10px'}}
                    id="outlined-multiline-static"
                    // label="Multiline"
                    multiline
                    maxRows={40}
                    // defaultValue="Default Value"
                    placeholder='Take a note'
                    variant='standard'
                    value={noteInput.body}
                    onChange={(e)=>setNoteInput(prev=>({...prev, body:e.target.value}))}
                />



                <Box sx={{display:'flex', flexDirection:'row', width:'100%'}}>
                    <Box sx={{display:'flex', flexDirection:'row', flexGrow:1}}>
                        <IconButton aria-label="pin">
                            <AddAlertIcon />
                        </IconButton>
                        <IconButton aria-label="pin">
                            <PersonAddAltIcon />
                        </IconButton>
                        <IconButton aria-label="pin">
                            <ColorLensIcon />
                        </IconButton>
                        <IconButton aria-label="pin">
                            <ImageIcon />
                        </IconButton>
                        <IconButton aria-label="pin">
                            <MoveToInboxIcon />
                        </IconButton>
                        <IconButton aria-label="pin">
                            <MoreVertIcon />
                        </IconButton>
                        <IconButton aria-label="pin">
                            <UndoIcon />
                        </IconButton>
                        <IconButton aria-label="pin">
                            <RedoIcon />
                        </IconButton>
                    </Box>
                    <Button variant="text" onClick={save}>Close</Button>
                </Box>
            </Box>
            {/* Notes container */}
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                {/* single note */}
                {
                    notes.map((element, index)=>
                    <Box className="single__note" key={index}>
                        <Typography sx={{fontWeight:700, marginBottom:'10px'}}>{element.title}</Typography>
                        <Box>
                            <Typography sx={{whiteSpace:'pre-wrap'}}>
                                {element.body}                                
                            </Typography>
                        </Box>
                    </Box>
                    )
                }
                
            </Box>
        </div>
    )
}
