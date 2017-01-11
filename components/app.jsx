import styles from '../index.scss';
import React, {Component} from 'react';
import RefreshList  from '../containers/RefreshList';
import TrainList  from '../containers/TrainList';


class APP extends Component {

    constructor(props) {
        super(props);
    }


    render() {


        return (
					<div>
						<h1>臺北捷運列車到站站名</h1>
						<p>(列車進入月台車站站名)-(行駛目的地) /更新時間</p>
						<p><span className={styles.redBg}>API來源</span> 臺北市政府資訊開放資料</p>
						<RefreshList/>
						<TrainList/>
					</div>
        );
    }

}

export default APP;
