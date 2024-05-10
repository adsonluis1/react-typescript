import {useArgs} from '@storybook/preview-api'
import Button from '../style/components/button.style';

export default {
    component:Button,
    args:{
        $select:true,
    },
    render:function Render(args){
        const [{$select }, updateArgs] = useArgs()

        function onChange () {
            updateArgs({$select :!$select })
        }

        return <Button  {...args} onClick={()=>onChange()} $select={$select} >Home</Button>
    }
}

export const ClikedStory = {
   
}

export const NoClickedStory = {
    args:{
        $select:false
    }
}