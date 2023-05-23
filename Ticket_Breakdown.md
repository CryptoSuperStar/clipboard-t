# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
Based on the given information, We can breakdowns of the ticket like this one
Ticket1 : Add custom id field to Agent table
- add a new custom_id field to the Agents table in the database
- modify the Agent model to include the custom_id field
- update the UI to allow Facilities to add/edit custom ids for agents
- migrate to update existing Agent records with a default custom id
- Acceptance criteria
    Agents have a new custom_id field in their database record
    UI allows Facilities to view edit custom ids for their Agents
Ticket 2: Use custom ids in reports
- Modify the generateReport function to use the custom ids instead of the internal database ids
- Acceptance criteria:
    Reports generated after Ticket 1 show custom ids for Agents instead of internal database ids
Ticket 3: Add validation for custom ids
- Add validation to the custom_id field to ensure that each Facility's custom ids are unique
- Add validation to ensure that the custom_id field does not exceed a certain length
- Update the UI to display validation errors to Facilities
- Acceptance criteria:
    Custom ids are validated to be unique and within a certain length
    Facilities receive feedback when trying to enter non-unique or oversized custom ids
Ticket 4: Update database indexes
- Add index on custom_id field in Agents table to improve query performance
- Acceptance criteria:
    Custom id queries from the UI are faster after this ticket
