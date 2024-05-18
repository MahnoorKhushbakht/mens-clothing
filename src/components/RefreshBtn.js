import { useRouter } from "next/navigation";
import { Button } from '@mui/material';
const RefreshBtn = () =>{
    const router = useRouter()
    const handleRefresh = () => {
        router.refresh()
    };
    return(
        <div>
            <Button  variant="contained" color="success" onClick={handleRefresh}>Newest Comment</Button>
        </div>
    )
}
export default RefreshBtn;