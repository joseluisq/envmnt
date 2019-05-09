//! # bulk
//!
//! Wrapper for env related functions which work on bulk of variables at once.
//!

#[cfg(test)]
#[path = "./bulk_test.rs"]
mod bulk_test;

use crate::environment;
use std::ffi::OsStr;

pub(crate) fn is_any_exists<K: AsRef<OsStr>>(keys: &Vec<K>) -> bool {
    let mut found = false;

    for key in keys.iter() {
        found = environment::exists(key);

        if found {
            break;
        }
    }

    found
}

pub(crate) fn is_all_exists<K: AsRef<OsStr>>(keys: &Vec<K>) -> bool {
    let mut found = false;

    for key in keys.iter() {
        found = environment::exists(key);

        if !found {
            break;
        }
    }

    found
}
