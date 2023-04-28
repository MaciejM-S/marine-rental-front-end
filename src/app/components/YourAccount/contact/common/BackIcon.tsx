import {IconButton} from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

type BackIconProps = {
    setOpenAvatar?:React.Dispatch<React.SetStateAction<boolean>>
    setOpenInfo?:React.Dispatch<React.SetStateAction<boolean>>
    setOpenPassword?:React.Dispatch<React.SetStateAction<boolean>>
    resetData?:()=>void
    setFile?:React.Dispatch<React.SetStateAction<File|undefined>>
    resetModal?:()=>void
}

function BackIcon(props:BackIconProps) {
    return (     
        <>
        <IconButton 
        onClick={() => { 
            if(props.setFile) props.setFile(undefined)
            props.setOpenAvatar&&props.setOpenAvatar(false) 
            props.setOpenInfo&&props.setOpenInfo(false) 
            props.setOpenPassword&&props.setOpenPassword(false) 
            if(props.resetData){props.resetData()}
            if(props.resetModal){props.resetModal()}     
            
        }}
        sx={{position:'absolute', top:5, left:5}} >
        <ExitToAppIcon color='primary' sx={{transform:'rotate(180deg)', fontSize:35  }} />
        </IconButton>
        </>
         );
}

export default BackIcon;