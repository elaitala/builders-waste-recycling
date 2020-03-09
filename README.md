# Builders Waste Recycling

## User Story:

Builders Waste and Recycling (BWR) has found a niche in the building industry. Whether you are building or remodeling a house, putting on a new roof, or just cleaning out the garage, BWR, has your trash hauling needs covered. Why go through the messy expensive process of hauling your own waste to the landfill or calling one of the traditional waste companies only to have them drop a huge immobile rolloff in your driveway or yard? BWR offers 10-yard and 15-yard trailers that are easy to position where you need them anywhere on the job site. Once full, just call or use the app and schedule a pickup or a new trailer. 

## App Purpose:

In the early days of BWR all trailers were tracked using paper index cards pinned to a wall. All client communication was done over the phone. This was neither efficient nor scalable as the company grew from 50 trailers and 2 drivers to over 100 trailers. Dave Brown, the owner, is not known for his tech savvy. Any improvements beyond pen and paper need to keep this in mind.

An automated customer CRM system was created in Excel that tracked all the trailers/locations/client jobs. A running tally of total and available trailers was at the top. Simplicity was the key. Click a button, enter the new job, it’s added to the list. When the trailer needed to be swapped, click Pickup Return and the listing was both renewed and copied to the archive for billing. When the job was done click Pickup Only and it was moved to the archive for billing and the trailer freed up for the next job. Billing and scheduling is still done manually. 

The system worked well over the years but eventually needed to transition to the cloud for manageability and upkeep. It was translated to Google Sheets allowing instant updates and accessibility from anywhere. It however lost some of its automation features as the original VBA code did not convert. Billing and scheduling is still done manually. 

My goal is to create a fully mobile cloud based solution to manage all aspects of the BWR business, from asset tracking, to scheduling and routing of drivers, to billing and receiving.

## Technologies:
- Mongoose/Express/Node (backend)
- React (frontend)
- Google Maps API (stretch)
  - Maps
  - Places
  - Routes
- Auth for login
- Validation on forms

## CRUD
- CREATE - Trailers, clients, jobs, repairs
- READ - Trailers, clients, jobs, repairs
- UPDATE - Trailer’s location, move to archive
- DESTROY - Delete user/job if created by accident
