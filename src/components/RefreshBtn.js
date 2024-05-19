import { useRouter } from "next/navigation";
import { Button } from '@mui/material';
const RefreshBtn = () =>{
    const router = useRouter()
    const handleRefresh = () => {
        router.refresh()
    };
    return(
        <div>
            <Button  type='submit' color='secondary' variant="contained" onClick={handleRefresh}>Newest Comment</Button>
        </div>
    )
}
export default RefreshBtn;