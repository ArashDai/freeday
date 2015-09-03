var React = require('react');
var Dropzone = require('react-dropzone');
// var StyleSheet = require('react-style');

var ImageUpload = React.createClass({

    getInitialState: function() {
      return {
        files: []
      }
    },

    onDrop: function (files) {
      console.log('Received files: ', files);
    },

    onOpenClick: function () {
      this.refs.dropzone.open();
    },

    render: function () {
      console.log(this.state.files);
        return (
            <div>
                <Dropzone ref="dropzone" onDrop={this.onDrop} onClick={this.onOpenClick}>
                    <div>Click here or drag and drop image to upload.</div>
                </Dropzone>

                {this.state.files.length > 0 ? <div>
                <h2>Uploading {this.state.files.length} files...</h2>
                <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
                </div> : null}
            </div>
        );
    }
});

// var uploadStyle = StyleSheet.create({
//     style: {
//       color: 'red'
//     },
//     activeStyle: {
//       color: 'blue'
//     } 
// });


module.exports = ImageUpload;