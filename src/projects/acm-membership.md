---
title: WIP: ACM group membership
date: October 2026
subtitle: Entra ID is retiring the MemberOf rule
tagline: Some of my work as an Infrastructure Co-Chair
order: 10
---

## Overview

ACM@UIUC is an umbrella organization consisting of 8 committees, which kind of help run the umbrella organization itself, and 19 special interest groups like SIGNLL (natural language processing), SIGPwny (cybersecurity), SIGma (math and algorithms), and Agent Fan Club.

We need to determine things like:
- Is this person a paid member?
- Is this person in some committee or SIG?
- Is this person an officer/chair/lead/helper/other?
- Is this person allowed to access some external service we use?  E.g., AWS, Google Drive, Stripe.

We use Entra ID, Microsoft's identity service, as a source of truth for a user's membership.  A user would be in a group, or not, and we would use this to answer the above questions.  We build dynamic groups with Entra ID's MemberOf rule, which automatically fills a group with the members of other groups.

However, [**Microsoft is retiring the MemberOf rule on November 3rd, 2026**](https://mc.merill.net/message/MC1448379).  After that, groups built with it stop updating and stay frozen with whatever members they had, so new members won't get access and people who leave will keep it.  This is bad!

As an Infrastructure Committee Co-Chair, it is my job to fix this :-)
