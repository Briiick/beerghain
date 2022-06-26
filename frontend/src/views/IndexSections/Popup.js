import React from 'react';

const style = {
    "popup" : {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,1)',
        zIndex: '9999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    "popupInner" : {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    "closeBtn" : {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '50px',
        height: '50px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }
}

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup" style={style.popup}>
            <div className="popup-inner" style={style.popupInner}>
                <button className="close-btn" style={style.closeBtn} onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : null;
};

export default Popup;