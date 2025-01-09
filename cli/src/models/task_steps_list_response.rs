use serde_derive::{Serialize, Deserialize};

/*
 * Agent Protocol
 *
 * Specification of the API protocol for communication with an agent.
 *
 * The version of the OpenAPI document: v1
 *
 * Generated by: https://openapi-generator.tech
 */

#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct TaskStepsListResponse {
    #[serde(rename = "steps")]
    pub steps: Vec<crate::models::Step>,
    #[serde(rename = "pagination")]
    pub pagination: Box<crate::models::Pagination>,
}

impl TaskStepsListResponse {
    pub fn new(
        steps: Vec<crate::models::Step>,
        pagination: crate::models::Pagination,
    ) -> TaskStepsListResponse {
        TaskStepsListResponse {
            steps,
            pagination: Box::new(pagination),
        }
    }
}
