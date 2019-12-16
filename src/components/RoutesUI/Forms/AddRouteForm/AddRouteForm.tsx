import * as React from "react";
import { toast } from "react-toastify";

import { IAddRouteFormProps } from "./AddRouteFormProps";
import { IAddRouteFormState } from "./AddRouteFormState";

class AddRouteForm extends React.Component<IAddRouteFormProps, IAddRouteFormState> {
    public state: IAddRouteFormState = {
        vertex: "",
        node: "",
        cost: 0,
    };

    public render(): React.ReactNode {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    autoComplete={"off"}
                    className={"flex-container"}
                >
                    <div>
                        <input
                            type="text"
                            onChange={this.handleInputChange("vertex")}
                            value={this.state.vertex}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={this.handleInputChange("node")}
                            value={this.state.node}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            onChange={this.handleInputChange("cost")}
                            value={this.state.cost}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className={"primary"}
                            disabled={this.isDisabled}
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    protected get isDisabled() {
        const { vertex, node, cost } = this.state;

        if (!vertex || !node) {
            return true;
        }

        return cost < 0;
    }

    protected handleInputChange = (
        fieldName: string,
    ): (event: React.ChangeEvent) => void => (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const value = event.currentTarget.value;
        this.setState({
            ...this.state,
            [fieldName]: value,
        });
    }

    protected handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        const {vertex, node, cost} = this.state;
        this.props.addRoute(vertex, node, cost);
        toast.success(`Route ${vertex + node + cost} was successfully added!`);
        this.setState({
            vertex: "",
            node: "",
            cost: 0
        });
    }
}

export default AddRouteForm;
