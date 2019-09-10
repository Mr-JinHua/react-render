import React,{Component} from "react";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { Menu, Icon } from "antd";
import { componentsList as list } from "../mock/components.js";
import marked from 'marked'
import mymd from './mdus.js'
import "./style/component.less";

const { SubMenu } = Menu;
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match, ...others }) => {
  return (
    <div>
      <h1>{match.params.topicId}</h1>
    </div>
  );
};

class Topics extends Component{
  constructor() {
    super()
    this.state = {
      collapsed: false
    }
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    document.getElementById('mdcontainer').innerHTML = marked(mymd);
  }
  menuOnClick = ({item, key, keyPath, domEvent}) => {
    console.log(item, 'item', key, 'key', keyPath, 'keyPath', domEvent, 'domEvent');
    let { route } = item.props;
    this.props.history.push(`/topics/${route}`);
  }
  render() {
    return (
      <section className="componentStyle">
        <div className="left-bar">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            inlineCollapsed={this.state.collapsed}
            inlineIndent={40}
            onClick={this.menuOnClick}
          >
            <Menu.Item key="1" route="summarize">
              <span>概述</span>
            </Menu.Item>
            <Menu.Item key="2" route="start">
              <span>快速开始</span>
            </Menu.Item>
            <Menu.Item key="3" route="training">
              <span>项目实战</span>
            </Menu.Item>
            <Menu.Item key="4" route="participation">
              <span>参与贡献</span>
            </Menu.Item>
            <Menu.Item key="5" route="record">
              <span>更新日志</span>
            </Menu.Item>
            {list.data.map((item, index) => {
              let childrenItem = [];
              if (item.children) {
                let oldindex = index;
                item.children.forEach((item, index) => {
                  childrenItem.push(
                    <Menu.Item key={`item-${oldindex}-${index}`} route={item.route}>{item.tittle}</Menu.Item>
                  );
                });
              }
              return (
                <SubMenu
                  key={`sub1-${index}`}
                  title={
                    <span>
                      <span>{item.tittle}</span>
                    </span>
                  }
                >
                  {childrenItem}
                </SubMenu>
              );
            })}
          </Menu>
        </div>
        <div className="right-bar">
          <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
          <Route
            exact
            path={this.props.match.url}
            render={() => <h3>我们开始开发了！！！</h3>}
          />
          <div id="mdcontainer"></div>
        </div>
      </section>
    );
  }
}
// const Topics = ({ match, ...others }) => {
//   return (
//     <section className="componentStyle">
//       <div className="left-bar">
//         <Menu
//           defaultSelectedKeys={["1"]}
//           defaultOpenKeys={["sub1"]}
//           mode="inline"
//           // theme="dark"
//         >
//           <Menu.Item key="1">
//             <span>概述</span>
//           </Menu.Item>
//           <Menu.Item key="1">
//             <span>快速开始</span>
//           </Menu.Item>
//           <Menu.Item key="1">
//             <span>项目实战</span>
//           </Menu.Item>
//           <Menu.Item key="1">
//             <span>参与贡献</span>
//           </Menu.Item>
//           <Menu.Item key="1">
//             <span>更新日志</span>
//           </Menu.Item>
//           {list.data.map((item, index) => {
//             let childrenItem = [];
//             if (item.children) {
//               item.children.forEach(item => {
//                 childrenItem.push(
//                   <Menu.Item key="5">{item.tittle}</Menu.Item>
//                 );
//               });
//             }
//             return (
//               <SubMenu
//                 key="sub1"
//                 title={
//                   <span>
//                     <span>{item.tittle}</span>
//                   </span>
//                 }
//               >
//                 {childrenItem}
//               </SubMenu>
//             );
//           })}
//         </Menu>
//       </div>
//       <Route path={`${match.url}/:topicId`} component={Topic} />
//       <Route
//         exact
//         path={match.url}
//         render={() => <h3>我们开始开发了！！！</h3>}
//       />
//     </section>
//   );
// };
export { About, Topic, Topics };
