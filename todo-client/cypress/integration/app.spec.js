describe("Todo App", () => {
	beforeEach(() => {
		cy.visit("/")
	})

	it("adds a new task", () => {
		cy.get('input[placeholder="Enter new task"]')
			.type("New task{enter}")
			.should("have.value", "")

		cy.get(".task-list")
			.find("li")
			.should("have.length", 1)
			.and("contain", "New task")
	})

	it("removes a task", () => {
		cy.get('input[placeholder="Enter new task"]').type(
			"Task to remove{enter}"
		)

		cy.get(".task-list").find("button").click()

		cy.get(".task-list").find("li").should("not.exist")
	})
})
