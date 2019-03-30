import React from 'react';

import './SortDetails.css';

class SortDetails extends React.Component {
	constructor() {
        super();
        this.state = {
        	
        }
    }
	render(){
		let {children} =this.props;
	    return <div className="sortBox">
	    	<div className="sortImg">
		    	<img src="https://activity.dapuimg.com/%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81.jpg"/>
		    </div>
		    <div className="sortTitle">
		    	<p>—— {children}分类 ——</p>
		    </div>
		    <ul className="sortSeries">
		    	<li>
		    		<img src="https://activity.dapuimg.com/%E4%BA%8C%E7%BA%A7%E7%B1%BB%E7%9B%AE_0049_%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81-%E8%8A%B1%E9%B8%9F%E7%B3%BB%E5%88%97.png"/>
		    		<p className="sortSeriesName">花鸟系列</p>
		    	</li>
		    	<li>
		    		<img src="https://activity.dapuimg.com/%E4%BA%8C%E7%BA%A7%E7%B1%BB%E7%9B%AE_0049_%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81-%E8%8A%B1%E9%B8%9F%E7%B3%BB%E5%88%97.png"/>
		    		<p className="sortSeriesName">花鸟系列</p>
		    	</li>
		    	<li>
		    		<img src="https://activity.dapuimg.com/%E4%BA%8C%E7%BA%A7%E7%B1%BB%E7%9B%AE_0049_%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81-%E8%8A%B1%E9%B8%9F%E7%B3%BB%E5%88%97.png"/>
		    		<p className="sortSeriesName">花鸟系列</p>
		    	</li>
		    	<li>
		    		<img src="https://activity.dapuimg.com/%E4%BA%8C%E7%BA%A7%E7%B1%BB%E7%9B%AE_0049_%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81-%E8%8A%B1%E9%B8%9F%E7%B3%BB%E5%88%97.png"/>
		    		<p className="sortSeriesName">花鸟系列</p>
		    	</li>
		    	<li>
		    		<img src="https://activity.dapuimg.com/%E4%BA%8C%E7%BA%A7%E7%B1%BB%E7%9B%AE_0049_%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81-%E8%8A%B1%E9%B8%9F%E7%B3%BB%E5%88%97.png"/>
		    		<p className="sortSeriesName">花鸟系列</p>
		    	</li>
		    </ul>
	    </div>
	}
}
//<></>

export default SortDetails;