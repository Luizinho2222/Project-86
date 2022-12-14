toggleSwitch() {
    const previous_state = this.State.isEnabled;
    const theme = !this.state.isEnabled ?"dark":"light"
    var updates = {}
    updates["/users/" + firebase.auth().currentUser.uid+"/current_theme"] = theme
    firebase.database().ref().update(updates);
    this.MediaStreamAudioDestinationNode({isEnabled: !previous_state, light_theme: previous_state})
};