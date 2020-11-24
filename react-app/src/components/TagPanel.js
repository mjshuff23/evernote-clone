import { Button, Drawer } from '@material-ui/core';
import React, { useState } from 'react';

const TagPanel = (props) => {
    const [ open, setopen ] = useState(false);

    const toggleOpen = event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setopen(!open);
    }

    return (
        <>
            <Button onClick={toggleOpen}>Open Tag Drawer</Button>
            <Drawer
                open={true}
                onClose={() => {}}
                PaperProps={{ style: { position: 'absolute' } }}
                BackdropProps={{ style: { position: 'absolute' } }}
                ModalProps={{
                    container: document.getElementById('drawer-container'),
                    style: { position: 'absolute' }
                }}
                variant="temporary"
                >
                    <span>Some elements</span>
            </Drawer>
        </>
    );
}

export default TagPanel;
