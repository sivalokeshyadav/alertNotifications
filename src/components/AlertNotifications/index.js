// Write your code here
import './index.css'

import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import {GrFormClose} from 'react-icons/gr'

import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <Notification>
      <div className="notification-container">
        <div className="heading-container">
          <AiFillCheckCircle className="success-color" />
          <h1 className="heading-success">Success</h1>
        </div>
        <p className="para">You can access all the files in the folder</p>
      </div>
      <div className="delete-icon">
        <GrFormClose />
      </div>
    </Notification>
    <Notification>
      <div className="notification-container">
        <div className="heading-container">
          <RiErrorWarningFill className="error-color" />
          <h1 className="heading-error">Error</h1>
        </div>
        <p className="para">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
      <div className="delete-icon">
        <GrFormClose />
      </div>
    </Notification>
    <Notification>
      <div className="notification-container">
        <div className="heading-container">
          <MdWarning className="warning-color" />
          <h1 className="heading-warning">Warning</h1>
        </div>
        <p className="para">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
      <div className="delete-icon">
        <GrFormClose />
      </div>
    </Notification>
    <Notification>
      <div className="notification-container">
        <div className="heading-container">
          <MdInfo className="info-color" />
          <h1 className="heading-info">Info</h1>
        </div>
        <p className="para">Anyone on the internet can view these files</p>
      </div>
      <div className="delete-icon">
        <GrFormClose />
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
