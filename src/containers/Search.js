import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { SearchForm } from '../components'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class SearchFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFirstName: '',
            searchLastName: '',
            modal: false
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onSearch = (keyword) => {
        const { history } = this.props
        const firstName = keyword.searchFirstName
        const lastName = keyword.searchLastName
        if (firstName === "" || lastName === "") {
            this.toggle()
            history.push('/')
        }
        else {
            history.push(`/search/?firstName=${firstName}&lastName=${lastName}`)
        }
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Warning message</ModalHeader>
                    <ModalBody>
                        Please input first name and last name for the search.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <SearchForm
                    {...this.state}
                    onSubmit={this.onSearch} />
            </div >
        )
    }
}
export default withRouter(SearchFormContainer)