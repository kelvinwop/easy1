import { Icon123 } from '@tabler/icons-react';

function OneFeet_ure(props) {
    return (
        <div className="col-6 p-3">
            <div className="row">
                <div className="col-2">
                    <Icon123 size={96} />
                </div>
                <div className="col-10">
                    <h5>{props.title}</h5>
                    <p>{props.content}</p>
                    <a href="/">Learn More →</a>
                </div>
            </div>
        </div>
    );
}

export default OneFeet_ure;