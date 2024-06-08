import "./css/TagsInSideBar.css"

function TagsInSideBar({link, text }){
    
   return(
    <div className="Tags">
        <a className="anchorTagInSideBar" href={link}>{text}</a>
        
    </div>
   );
}

export default TagsInSideBar;