import { create, act } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import React from "react";

describe("ProfileStatus component", () => {
	test("status input should be undefined on default", () => {
		const component = create(<ProfileStatus/>);
		const root = component.root;
		expect(() => {
			let input = root.findByType("input");
		}).toThrow();
	});

	test("status span should be correct", () => {
		const component = create(<ProfileStatus userStatus={"status"}/>);
		const root = component.root;
		const span = root.findByType("span");
		expect(span.props.children).toBe("status");
	});

	test("status input should be correct after double click", () => {
		const component = create(<ProfileStatus userStatus={"status"}/>);
		const root = component.root;
		const span = root.findByType("span");
		act(() => {
			span.props.onDoubleClick()
		});
		const input = root.findByType("input");
		expect(input.props.value).toBe("status");
	});
});