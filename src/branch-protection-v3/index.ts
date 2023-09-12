/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchProtectionV3Config extends cdktf.TerraformMetaArguments {
  /**
  * The Git branch to protect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#branch BranchProtectionV3#branch}
  */
  readonly branch: string;
  /**
  * Setting this to 'true' enforces status checks for repository administrators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#enforce_admins BranchProtectionV3#enforce_admins}
  */
  readonly enforceAdmins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#id BranchProtectionV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GitHub repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#repository BranchProtectionV3#repository}
  */
  readonly repository: string;
  /**
  * Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#require_conversation_resolution BranchProtectionV3#require_conversation_resolution}
  */
  readonly requireConversationResolution?: boolean | cdktf.IResolvable;
  /**
  * Setting this to 'true' requires all commits to be signed with GPG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#require_signed_commits BranchProtectionV3#require_signed_commits}
  */
  readonly requireSignedCommits?: boolean | cdktf.IResolvable;
  /**
  * required_pull_request_reviews block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#required_pull_request_reviews BranchProtectionV3#required_pull_request_reviews}
  */
  readonly requiredPullRequestReviews?: BranchProtectionV3RequiredPullRequestReviews;
  /**
  * required_status_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#required_status_checks BranchProtectionV3#required_status_checks}
  */
  readonly requiredStatusChecks?: BranchProtectionV3RequiredStatusChecks;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#restrictions BranchProtectionV3#restrictions}
  */
  readonly restrictions?: BranchProtectionV3Restrictions;
}
export interface BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#apps BranchProtectionV3#apps}
  */
  readonly apps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#teams BranchProtectionV3#teams}
  */
  readonly teams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#users BranchProtectionV3#users}
  */
  readonly users?: string[];
}

export function branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesToTerraform(struct?: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference | BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apps),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}

export class BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apps !== undefined) {
      hasAnyValues = true;
      internalValueResult.apps = this._apps;
    }
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apps = undefined;
      this._teams = undefined;
      this._users = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apps = value.apps;
      this._teams = value.teams;
      this._users = value.users;
    }
  }

  // apps - computed: false, optional: true, required: false
  private _apps?: string[]; 
  public get apps() {
    return cdktf.Fn.tolist(this.getListAttribute('apps'));
  }
  public set apps(value: string[]) {
    this._apps = value;
  }
  public resetApps() {
    this._apps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return cdktf.Fn.tolist(this.getListAttribute('teams'));
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}
export interface BranchProtectionV3RequiredPullRequestReviews {
  /**
  * Dismiss approved reviews automatically when a new commit is pushed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#dismiss_stale_reviews BranchProtectionV3#dismiss_stale_reviews}
  */
  readonly dismissStaleReviews?: boolean | cdktf.IResolvable;
  /**
  * The list of team slugs with dismissal access. Always use slug of the team, not its name. Each team already has to have access to the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#dismissal_teams BranchProtectionV3#dismissal_teams}
  */
  readonly dismissalTeams?: string[];
  /**
  * The list of user logins with dismissal access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#dismissal_users BranchProtectionV3#dismissal_users}
  */
  readonly dismissalUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#include_admins BranchProtectionV3#include_admins}
  */
  readonly includeAdmins?: boolean | cdktf.IResolvable;
  /**
  * Require an approved review in pull requests including files with a designated code owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#require_code_owner_reviews BranchProtectionV3#require_code_owner_reviews}
  */
  readonly requireCodeOwnerReviews?: boolean | cdktf.IResolvable;
  /**
  * Require 'x' number of approvals to satisfy branch protection requirements. If this is specified it must be a number between 0-6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#required_approving_review_count BranchProtectionV3#required_approving_review_count}
  */
  readonly requiredApprovingReviewCount?: number;
  /**
  * bypass_pull_request_allowances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#bypass_pull_request_allowances BranchProtectionV3#bypass_pull_request_allowances}
  */
  readonly bypassPullRequestAllowances?: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances;
}

export function branchProtectionV3RequiredPullRequestReviewsToTerraform(struct?: BranchProtectionV3RequiredPullRequestReviewsOutputReference | BranchProtectionV3RequiredPullRequestReviews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dismiss_stale_reviews: cdktf.booleanToTerraform(struct!.dismissStaleReviews),
    dismissal_teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dismissalTeams),
    dismissal_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dismissalUsers),
    include_admins: cdktf.booleanToTerraform(struct!.includeAdmins),
    require_code_owner_reviews: cdktf.booleanToTerraform(struct!.requireCodeOwnerReviews),
    required_approving_review_count: cdktf.numberToTerraform(struct!.requiredApprovingReviewCount),
    bypass_pull_request_allowances: branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesToTerraform(struct!.bypassPullRequestAllowances),
  }
}

export class BranchProtectionV3RequiredPullRequestReviewsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BranchProtectionV3RequiredPullRequestReviews | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dismissStaleReviews !== undefined) {
      hasAnyValues = true;
      internalValueResult.dismissStaleReviews = this._dismissStaleReviews;
    }
    if (this._dismissalTeams !== undefined) {
      hasAnyValues = true;
      internalValueResult.dismissalTeams = this._dismissalTeams;
    }
    if (this._dismissalUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dismissalUsers = this._dismissalUsers;
    }
    if (this._includeAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAdmins = this._includeAdmins;
    }
    if (this._requireCodeOwnerReviews !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireCodeOwnerReviews = this._requireCodeOwnerReviews;
    }
    if (this._requiredApprovingReviewCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredApprovingReviewCount = this._requiredApprovingReviewCount;
    }
    if (this._bypassPullRequestAllowances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassPullRequestAllowances = this._bypassPullRequestAllowances?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchProtectionV3RequiredPullRequestReviews | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dismissStaleReviews = undefined;
      this._dismissalTeams = undefined;
      this._dismissalUsers = undefined;
      this._includeAdmins = undefined;
      this._requireCodeOwnerReviews = undefined;
      this._requiredApprovingReviewCount = undefined;
      this._bypassPullRequestAllowances.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dismissStaleReviews = value.dismissStaleReviews;
      this._dismissalTeams = value.dismissalTeams;
      this._dismissalUsers = value.dismissalUsers;
      this._includeAdmins = value.includeAdmins;
      this._requireCodeOwnerReviews = value.requireCodeOwnerReviews;
      this._requiredApprovingReviewCount = value.requiredApprovingReviewCount;
      this._bypassPullRequestAllowances.internalValue = value.bypassPullRequestAllowances;
    }
  }

  // dismiss_stale_reviews - computed: false, optional: true, required: false
  private _dismissStaleReviews?: boolean | cdktf.IResolvable; 
  public get dismissStaleReviews() {
    return this.getBooleanAttribute('dismiss_stale_reviews');
  }
  public set dismissStaleReviews(value: boolean | cdktf.IResolvable) {
    this._dismissStaleReviews = value;
  }
  public resetDismissStaleReviews() {
    this._dismissStaleReviews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dismissStaleReviewsInput() {
    return this._dismissStaleReviews;
  }

  // dismissal_teams - computed: false, optional: true, required: false
  private _dismissalTeams?: string[]; 
  public get dismissalTeams() {
    return cdktf.Fn.tolist(this.getListAttribute('dismissal_teams'));
  }
  public set dismissalTeams(value: string[]) {
    this._dismissalTeams = value;
  }
  public resetDismissalTeams() {
    this._dismissalTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dismissalTeamsInput() {
    return this._dismissalTeams;
  }

  // dismissal_users - computed: false, optional: true, required: false
  private _dismissalUsers?: string[]; 
  public get dismissalUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('dismissal_users'));
  }
  public set dismissalUsers(value: string[]) {
    this._dismissalUsers = value;
  }
  public resetDismissalUsers() {
    this._dismissalUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dismissalUsersInput() {
    return this._dismissalUsers;
  }

  // include_admins - computed: false, optional: true, required: false
  private _includeAdmins?: boolean | cdktf.IResolvable; 
  public get includeAdmins() {
    return this.getBooleanAttribute('include_admins');
  }
  public set includeAdmins(value: boolean | cdktf.IResolvable) {
    this._includeAdmins = value;
  }
  public resetIncludeAdmins() {
    this._includeAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAdminsInput() {
    return this._includeAdmins;
  }

  // require_code_owner_reviews - computed: false, optional: true, required: false
  private _requireCodeOwnerReviews?: boolean | cdktf.IResolvable; 
  public get requireCodeOwnerReviews() {
    return this.getBooleanAttribute('require_code_owner_reviews');
  }
  public set requireCodeOwnerReviews(value: boolean | cdktf.IResolvable) {
    this._requireCodeOwnerReviews = value;
  }
  public resetRequireCodeOwnerReviews() {
    this._requireCodeOwnerReviews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCodeOwnerReviewsInput() {
    return this._requireCodeOwnerReviews;
  }

  // required_approving_review_count - computed: false, optional: true, required: false
  private _requiredApprovingReviewCount?: number; 
  public get requiredApprovingReviewCount() {
    return this.getNumberAttribute('required_approving_review_count');
  }
  public set requiredApprovingReviewCount(value: number) {
    this._requiredApprovingReviewCount = value;
  }
  public resetRequiredApprovingReviewCount() {
    this._requiredApprovingReviewCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredApprovingReviewCountInput() {
    return this._requiredApprovingReviewCount;
  }

  // bypass_pull_request_allowances - computed: false, optional: true, required: false
  private _bypassPullRequestAllowances = new BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference(this, "bypass_pull_request_allowances");
  public get bypassPullRequestAllowances() {
    return this._bypassPullRequestAllowances;
  }
  public putBypassPullRequestAllowances(value: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances) {
    this._bypassPullRequestAllowances.internalValue = value;
  }
  public resetBypassPullRequestAllowances() {
    this._bypassPullRequestAllowances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassPullRequestAllowancesInput() {
    return this._bypassPullRequestAllowances.internalValue;
  }
}
export interface BranchProtectionV3RequiredStatusChecks {
  /**
  * The list of status checks to require in order to merge into this branch. No status checks are required by default. Checks should be strings containing the 'context' and 'app_id' like so 'context:app_id'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#checks BranchProtectionV3#checks}
  */
  readonly checks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#contexts BranchProtectionV3#contexts}
  */
  readonly contexts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#include_admins BranchProtectionV3#include_admins}
  */
  readonly includeAdmins?: boolean | cdktf.IResolvable;
  /**
  * Require branches to be up to date before merging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#strict BranchProtectionV3#strict}
  */
  readonly strict?: boolean | cdktf.IResolvable;
}

export function branchProtectionV3RequiredStatusChecksToTerraform(struct?: BranchProtectionV3RequiredStatusChecksOutputReference | BranchProtectionV3RequiredStatusChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.checks),
    contexts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contexts),
    include_admins: cdktf.booleanToTerraform(struct!.includeAdmins),
    strict: cdktf.booleanToTerraform(struct!.strict),
  }
}

export class BranchProtectionV3RequiredStatusChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BranchProtectionV3RequiredStatusChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checks !== undefined) {
      hasAnyValues = true;
      internalValueResult.checks = this._checks;
    }
    if (this._contexts !== undefined) {
      hasAnyValues = true;
      internalValueResult.contexts = this._contexts;
    }
    if (this._includeAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAdmins = this._includeAdmins;
    }
    if (this._strict !== undefined) {
      hasAnyValues = true;
      internalValueResult.strict = this._strict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchProtectionV3RequiredStatusChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checks = undefined;
      this._contexts = undefined;
      this._includeAdmins = undefined;
      this._strict = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checks = value.checks;
      this._contexts = value.contexts;
      this._includeAdmins = value.includeAdmins;
      this._strict = value.strict;
    }
  }

  // checks - computed: false, optional: true, required: false
  private _checks?: string[]; 
  public get checks() {
    return cdktf.Fn.tolist(this.getListAttribute('checks'));
  }
  public set checks(value: string[]) {
    this._checks = value;
  }
  public resetChecks() {
    this._checks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksInput() {
    return this._checks;
  }

  // contexts - computed: false, optional: true, required: false
  private _contexts?: string[]; 
  public get contexts() {
    return cdktf.Fn.tolist(this.getListAttribute('contexts'));
  }
  public set contexts(value: string[]) {
    this._contexts = value;
  }
  public resetContexts() {
    this._contexts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextsInput() {
    return this._contexts;
  }

  // include_admins - computed: false, optional: true, required: false
  private _includeAdmins?: boolean | cdktf.IResolvable; 
  public get includeAdmins() {
    return this.getBooleanAttribute('include_admins');
  }
  public set includeAdmins(value: boolean | cdktf.IResolvable) {
    this._includeAdmins = value;
  }
  public resetIncludeAdmins() {
    this._includeAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAdminsInput() {
    return this._includeAdmins;
  }

  // strict - computed: false, optional: true, required: false
  private _strict?: boolean | cdktf.IResolvable; 
  public get strict() {
    return this.getBooleanAttribute('strict');
  }
  public set strict(value: boolean | cdktf.IResolvable) {
    this._strict = value;
  }
  public resetStrict() {
    this._strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictInput() {
    return this._strict;
  }
}
export interface BranchProtectionV3Restrictions {
  /**
  * The list of app slugs with push access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#apps BranchProtectionV3#apps}
  */
  readonly apps?: string[];
  /**
  * The list of team slugs with push access. Always use slug of the team, not its name. Each team already has to have access to the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#teams BranchProtectionV3#teams}
  */
  readonly teams?: string[];
  /**
  * The list of user logins with push access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3#users BranchProtectionV3#users}
  */
  readonly users?: string[];
}

export function branchProtectionV3RestrictionsToTerraform(struct?: BranchProtectionV3RestrictionsOutputReference | BranchProtectionV3Restrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apps),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}

export class BranchProtectionV3RestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BranchProtectionV3Restrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apps !== undefined) {
      hasAnyValues = true;
      internalValueResult.apps = this._apps;
    }
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchProtectionV3Restrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apps = undefined;
      this._teams = undefined;
      this._users = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apps = value.apps;
      this._teams = value.teams;
      this._users = value.users;
    }
  }

  // apps - computed: false, optional: true, required: false
  private _apps?: string[]; 
  public get apps() {
    return cdktf.Fn.tolist(this.getListAttribute('apps'));
  }
  public set apps(value: string[]) {
    this._apps = value;
  }
  public resetApps() {
    this._apps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return cdktf.Fn.tolist(this.getListAttribute('teams'));
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3 github_branch_protection_v3}
*/
export class BranchProtectionV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_branch_protection_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/branch_protection_v3 github_branch_protection_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchProtectionV3Config
  */
  public constructor(scope: Construct, id: string, config: BranchProtectionV3Config) {
    super(scope, id, {
      terraformResourceType: 'github_branch_protection_v3',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.36.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._branch = config.branch;
    this._enforceAdmins = config.enforceAdmins;
    this._id = config.id;
    this._repository = config.repository;
    this._requireConversationResolution = config.requireConversationResolution;
    this._requireSignedCommits = config.requireSignedCommits;
    this._requiredPullRequestReviews.internalValue = config.requiredPullRequestReviews;
    this._requiredStatusChecks.internalValue = config.requiredStatusChecks;
    this._restrictions.internalValue = config.restrictions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // enforce_admins - computed: false, optional: true, required: false
  private _enforceAdmins?: boolean | cdktf.IResolvable; 
  public get enforceAdmins() {
    return this.getBooleanAttribute('enforce_admins');
  }
  public set enforceAdmins(value: boolean | cdktf.IResolvable) {
    this._enforceAdmins = value;
  }
  public resetEnforceAdmins() {
    this._enforceAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceAdminsInput() {
    return this._enforceAdmins;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // require_conversation_resolution - computed: false, optional: true, required: false
  private _requireConversationResolution?: boolean | cdktf.IResolvable; 
  public get requireConversationResolution() {
    return this.getBooleanAttribute('require_conversation_resolution');
  }
  public set requireConversationResolution(value: boolean | cdktf.IResolvable) {
    this._requireConversationResolution = value;
  }
  public resetRequireConversationResolution() {
    this._requireConversationResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireConversationResolutionInput() {
    return this._requireConversationResolution;
  }

  // require_signed_commits - computed: false, optional: true, required: false
  private _requireSignedCommits?: boolean | cdktf.IResolvable; 
  public get requireSignedCommits() {
    return this.getBooleanAttribute('require_signed_commits');
  }
  public set requireSignedCommits(value: boolean | cdktf.IResolvable) {
    this._requireSignedCommits = value;
  }
  public resetRequireSignedCommits() {
    this._requireSignedCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignedCommitsInput() {
    return this._requireSignedCommits;
  }

  // required_pull_request_reviews - computed: false, optional: true, required: false
  private _requiredPullRequestReviews = new BranchProtectionV3RequiredPullRequestReviewsOutputReference(this, "required_pull_request_reviews");
  public get requiredPullRequestReviews() {
    return this._requiredPullRequestReviews;
  }
  public putRequiredPullRequestReviews(value: BranchProtectionV3RequiredPullRequestReviews) {
    this._requiredPullRequestReviews.internalValue = value;
  }
  public resetRequiredPullRequestReviews() {
    this._requiredPullRequestReviews.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredPullRequestReviewsInput() {
    return this._requiredPullRequestReviews.internalValue;
  }

  // required_status_checks - computed: false, optional: true, required: false
  private _requiredStatusChecks = new BranchProtectionV3RequiredStatusChecksOutputReference(this, "required_status_checks");
  public get requiredStatusChecks() {
    return this._requiredStatusChecks;
  }
  public putRequiredStatusChecks(value: BranchProtectionV3RequiredStatusChecks) {
    this._requiredStatusChecks.internalValue = value;
  }
  public resetRequiredStatusChecks() {
    this._requiredStatusChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredStatusChecksInput() {
    return this._requiredStatusChecks.internalValue;
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new BranchProtectionV3RestrictionsOutputReference(this, "restrictions");
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: BranchProtectionV3Restrictions) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      enforce_admins: cdktf.booleanToTerraform(this._enforceAdmins),
      id: cdktf.stringToTerraform(this._id),
      repository: cdktf.stringToTerraform(this._repository),
      require_conversation_resolution: cdktf.booleanToTerraform(this._requireConversationResolution),
      require_signed_commits: cdktf.booleanToTerraform(this._requireSignedCommits),
      required_pull_request_reviews: branchProtectionV3RequiredPullRequestReviewsToTerraform(this._requiredPullRequestReviews.internalValue),
      required_status_checks: branchProtectionV3RequiredStatusChecksToTerraform(this._requiredStatusChecks.internalValue),
      restrictions: branchProtectionV3RestrictionsToTerraform(this._restrictions.internalValue),
    };
  }
}
