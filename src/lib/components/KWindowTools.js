
/**
 *
 */
class KWindowTools {
  
  static REJECTED=0;
  static ACCEPTED=1; // Same as returning NULL really

  /**
   * 
   */
  static createWindowReject (aMessage) {
    return ({
      result: KWindowTools.REJECTED,
      message: aMessage
    });
  }

  /**
   * 
   */
  static createWindowAccept () {
    return ({
      result: KWindowTools.ACCEPTED,
      message: ""
    });
  }  
}

export default KWindowTools;
