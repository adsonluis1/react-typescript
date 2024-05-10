import {Nav} from '../style/components/Nav.style'
import Button from '../style/components/button.style'
import {useArgs} from '@storybook/preview-api'
export default {
    component:Nav,
    args:{
        $select:true
    },
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}

export const NavLight = {
    render:function Render (args){
        const [{$select},updateArgs] = useArgs()

        function onClick (){
            updateArgs({$select:!$select})
        }

        return(
        <Nav {...args}>
            <Button {...args} $select={$select} onClick={onClick}>Home</Button>
        </Nav>
        )
    }
}