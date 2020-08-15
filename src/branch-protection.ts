// https://www.terraform.io/docs/providers/github/r/branch_protection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BranchProtectionConfig extends TerraformMetaArguments {
  readonly branch: string;
  readonly enforceAdmins?: boolean;
  readonly repository: string;
  readonly requireSignedCommits?: boolean;
  /** required_pull_request_reviews block */
  readonly requiredPullRequestReviews?: BranchProtectionRequiredPullRequestReviews[];
  /** required_status_checks block */
  readonly requiredStatusChecks?: BranchProtectionRequiredStatusChecks[];
  /** restrictions block */
  readonly restrictions?: BranchProtectionRestrictions[];
}
export interface BranchProtectionRequiredPullRequestReviews {
  readonly dismissStaleReviews?: boolean;
  readonly dismissalTeams?: string[];
  readonly dismissalUsers?: string[];
  readonly includeAdmins?: boolean;
  readonly requireCodeOwnerReviews?: boolean;
  readonly requiredApprovingReviewCount?: number;
}
export interface BranchProtectionRequiredStatusChecks {
  readonly contexts?: string[];
  readonly includeAdmins?: boolean;
  readonly strict?: boolean;
}
export interface BranchProtectionRestrictions {
  readonly apps?: string[];
  readonly teams?: string[];
  readonly users?: string[];
}

// Resource

export class BranchProtection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BranchProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'github_branch_protection',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._branch = config.branch;
    this._enforceAdmins = config.enforceAdmins;
    this._repository = config.repository;
    this._requireSignedCommits = config.requireSignedCommits;
    this._requiredPullRequestReviews = config.requiredPullRequestReviews;
    this._requiredStatusChecks = config.requiredStatusChecks;
    this._restrictions = config.restrictions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: false, required: true
  private _branch: string;
  public get branch() {
    return this._branch;
  }
  public set branch(value: string) {
    this._branch = value;
  }

  // enforce_admins - computed: false, optional: true, required: false
  private _enforceAdmins?: boolean;
  public get enforceAdmins() {
    return this._enforceAdmins;
  }
  public set enforceAdmins(value: boolean | undefined) {
    this._enforceAdmins = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this._repository;
  }
  public set repository(value: string) {
    this._repository = value;
  }

  // require_signed_commits - computed: false, optional: true, required: false
  private _requireSignedCommits?: boolean;
  public get requireSignedCommits() {
    return this._requireSignedCommits;
  }
  public set requireSignedCommits(value: boolean | undefined) {
    this._requireSignedCommits = value;
  }

  // required_pull_request_reviews - computed: false, optional: true, required: false
  private _requiredPullRequestReviews?: BranchProtectionRequiredPullRequestReviews[];
  public get requiredPullRequestReviews() {
    return this._requiredPullRequestReviews;
  }
  public set requiredPullRequestReviews(value: BranchProtectionRequiredPullRequestReviews[] | undefined) {
    this._requiredPullRequestReviews = value;
  }

  // required_status_checks - computed: false, optional: true, required: false
  private _requiredStatusChecks?: BranchProtectionRequiredStatusChecks[];
  public get requiredStatusChecks() {
    return this._requiredStatusChecks;
  }
  public set requiredStatusChecks(value: BranchProtectionRequiredStatusChecks[] | undefined) {
    this._requiredStatusChecks = value;
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions?: BranchProtectionRestrictions[];
  public get restrictions() {
    return this._restrictions;
  }
  public set restrictions(value: BranchProtectionRestrictions[] | undefined) {
    this._restrictions = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: this._branch,
      enforce_admins: this._enforceAdmins,
      repository: this._repository,
      require_signed_commits: this._requireSignedCommits,
      required_pull_request_reviews: this._requiredPullRequestReviews,
      required_status_checks: this._requiredStatusChecks,
      restrictions: this._restrictions,
    };
  }
}
