/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnterpriseActionsWorkflowPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether GitHub Actions can approve pull request reviews.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#can_approve_pull_request_reviews EnterpriseActionsWorkflowPermissions#can_approve_pull_request_reviews}
  */
  readonly canApprovePullRequestReviews?: boolean | cdktf.IResolvable;
  /**
  * The default workflow permissions granted to the GITHUB_TOKEN when running workflows. Can be 'read' or 'write'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#default_workflow_permissions EnterpriseActionsWorkflowPermissions#default_workflow_permissions}
  */
  readonly defaultWorkflowPermissions?: string;
  /**
  * The slug of the enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#enterprise_slug EnterpriseActionsWorkflowPermissions#enterprise_slug}
  */
  readonly enterpriseSlug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#id EnterpriseActionsWorkflowPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions github_enterprise_actions_workflow_permissions}
*/
export class EnterpriseActionsWorkflowPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_enterprise_actions_workflow_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnterpriseActionsWorkflowPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnterpriseActionsWorkflowPermissions to import
  * @param importFromId The id of the existing EnterpriseActionsWorkflowPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnterpriseActionsWorkflowPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_actions_workflow_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions github_enterprise_actions_workflow_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnterpriseActionsWorkflowPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: EnterpriseActionsWorkflowPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_enterprise_actions_workflow_permissions',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.9.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canApprovePullRequestReviews = config.canApprovePullRequestReviews;
    this._defaultWorkflowPermissions = config.defaultWorkflowPermissions;
    this._enterpriseSlug = config.enterpriseSlug;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_approve_pull_request_reviews - computed: false, optional: true, required: false
  private _canApprovePullRequestReviews?: boolean | cdktf.IResolvable; 
  public get canApprovePullRequestReviews() {
    return this.getBooleanAttribute('can_approve_pull_request_reviews');
  }
  public set canApprovePullRequestReviews(value: boolean | cdktf.IResolvable) {
    this._canApprovePullRequestReviews = value;
  }
  public resetCanApprovePullRequestReviews() {
    this._canApprovePullRequestReviews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canApprovePullRequestReviewsInput() {
    return this._canApprovePullRequestReviews;
  }

  // default_workflow_permissions - computed: false, optional: true, required: false
  private _defaultWorkflowPermissions?: string; 
  public get defaultWorkflowPermissions() {
    return this.getStringAttribute('default_workflow_permissions');
  }
  public set defaultWorkflowPermissions(value: string) {
    this._defaultWorkflowPermissions = value;
  }
  public resetDefaultWorkflowPermissions() {
    this._defaultWorkflowPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWorkflowPermissionsInput() {
    return this._defaultWorkflowPermissions;
  }

  // enterprise_slug - computed: false, optional: false, required: true
  private _enterpriseSlug?: string; 
  public get enterpriseSlug() {
    return this.getStringAttribute('enterprise_slug');
  }
  public set enterpriseSlug(value: string) {
    this._enterpriseSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseSlugInput() {
    return this._enterpriseSlug;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_approve_pull_request_reviews: cdktf.booleanToTerraform(this._canApprovePullRequestReviews),
      default_workflow_permissions: cdktf.stringToTerraform(this._defaultWorkflowPermissions),
      enterprise_slug: cdktf.stringToTerraform(this._enterpriseSlug),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_approve_pull_request_reviews: {
        value: cdktf.booleanToHclTerraform(this._canApprovePullRequestReviews),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_workflow_permissions: {
        value: cdktf.stringToHclTerraform(this._defaultWorkflowPermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_slug: {
        value: cdktf.stringToHclTerraform(this._enterpriseSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
