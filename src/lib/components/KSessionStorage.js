
/**
 * Use this class as a middle layer to store data to either network, disk (Electron) or local storage
 * 
 * We switched from using cookies to local storage:
 *
 * The size of a cookie contains entire cookie, including name, value, expiry date etc. A cookie can 
 * contains data upto 4096 Bytes only that is the maximum size of a cookie which can be. If you want 
 * to support most browsers, then do not exceed 50 cookies per domain, and 4093 bytes per domain.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
 */
class KSessionStorage {
 
  /**
   *
   */ 
  constructor (aKey) {
    console.log ("KSessionStorage ()");

    this.cookieJar={};
    this.permanence=null;
    this.equalCharacter="=";
    this.key=aKey;

    if (this.key == undefined) {
      this.key="knossys";
    } else {
      if (this.key==null) {
        this.key="knossys";
      }
    }

    this.permanence = this;
    this.permanence.reload ();
  }

  /**
   * Deprecated, use value access methods
   */ 
  setCookie (cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  /**
   * Deprecated, use value access methods
   */
  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  /**
   * Deprecated, use value access methods
   */
  checkCookie() {
    var username = getCookie("username");
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }    

  /**
   *
   */
  setValue (aKey,aValue) {
    //console.log ("setValue ()");
    this.cookieJar [aKey]=aValue;
    this.permanence.save ();
  }

  /**
   *
   */
  getValue (aKey,aDefault) {
    if (this.cookieJar.hasOwnProperty (aKey)) {
      return (this.cookieJar [aKey]);
    }

    return (aDefault);
  }

  /**
   *
   */
  setBooleanValue (aKey,aValue) {
    this.setValue (aKey,aValue.toString());
  }

  /**
   *
   */
  getBooleanValue (aKey) {
    let booleanString=this.getValue (aKey,false);
    if (booleanString) {
      if (booleanString.toLowerCase ()=="true") {
        return (true);
      }
    }

    return (false);
  }

  /**
   *
   */
  setIntegerValue (aKey,aValue) {
    this.setValue (aKey,aValue.toString());
  }

  /**
   *
   */
  getIntegerValue (aKey) {
    let integerString=this.getValue (aKey,0);
    if (integerString) {
      return (parseInt (integerString));
    }

    return (false);
  }  

  /**
   *
   */
  setFloatValue (aKey,aValue) {
    this.setValue (aKey,aValue.toString());
  }

  /**
   *
   */
  getFloatValue (aKey) {
    let floatString=this.getValue (aKey,0.0);
    if (floatString) {
      return (parseFloat (floatString));
    }

    return (false);
  }  

  /**
   *
   */
  setJSONObject (aKey,anObject) {
    let jsonString=JSON.stringify (anObject);
    this.setValueEncoded (aKey,jsonString);
  }

  /**
   *
   */
  getJSONObject (aKey) {
    let jsonString=this.getValueEncoded (aKey);
    return (JSON.parse (jsonString));
  }   

  /**
   *
   */
  setValueEncoded (aKey,aValue) {
    //console.log ("setValueEncoded ()");
    //console.log (aValue);
    this.permanence.setValue (aKey,btoa(aValue)); 
  }

  /**
   * This is a problem because W10= decodes to [] and that might not be
   * a very good default value
   */
  getValueEncoded (aKey) {
    //console.log ("getValueEncoded ()");
    let raw=this.permanence.getValue (aKey,"W10=");
    //console.log (raw);
    return (atob(raw));
  }

  /**
   *
   */
  save () {
    //console.log ("save ()");
    //console.log (cookieJar);

    let data="";
    let index=0;

    for (let [key, value] of Object.entries(this.cookieJar)) {
      let separator=";";
      if (index==0) {
        separator="";
      }

      data=data+separator+key+this.equalCharacter+value;

      index++;
    }

    window.localStorage.setItem (this.key,data);

    // Make sure that our internal model is the same as what's on disk
    this.permanence.reload ();
  }

  /**
   *
   */
  reload () {
    //console.log ("reload ()");

    let allCookies = window.localStorage.getItem (this.key);
    if (allCookies!=null) {
      this.permanence.parse (allCookies);      
    }
  }

  /**
   *
   */
  parse (data) {
    //console.log ("parse ()");
    let splitter=data.split (";");
     
    this.cookieJar={};

    for (let i=0;i<splitter.length;i++) {
      let kv=splitter [i].split (this.equalCharacter);
      if (kv.length>1) {
        this.cookieJar [kv [0].trim()]=kv [1].trim();
      }
    }
  }
}

export default KSessionStorage;
