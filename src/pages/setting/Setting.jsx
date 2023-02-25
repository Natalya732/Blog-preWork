import "./Setting.css";
import Sidebar from "../../sidebar/sidebar";

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <div className="settingsPP">
            <label style={{ fontSize: "20px", marginRight: "20px" }}>
              Profile Picture
            </label>
            <img
              className="settingImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IdiZhNstOvQnRwu6u6LisesdE5SH-UFQlQ&usqp=CAU"
              alt=""
            />
            <label
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              htmlFor="fileInput"
            >
              <i class="settingsPPIcon fa-regular fa-circle-user"></i>
              <p
                style={{
                  fontSize: "15px",
                  marginLeft: "8px",
                  fontWeight: "400",
                }}
              >
                Import picture
              </p>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          {/*here the above input is doing work to input the file and by putting icon as label we can press icon to input the files
          moreover we are doing display of input field as none so it won't be displayed*/}
          <label>Username</label>
          <input type="text" placeholder="Nikita" />
          <label>Email</label>
          <input type="email" placeholder="nikita12342@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
