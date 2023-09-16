/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository_pull_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryPullRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the branch serving as the base of the Pull Request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository_pull_request#base_ref RepositoryPullRequest#base_ref}
  */
  readonly baseRef: string;
  /**
  * Name of the base repository to retrieve the Pull Requests from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository_pull_request#base_repository RepositoryPullRequest#base_repository}
  */
  readonly baseRepository: string;
  /**
  * Body of the Pull Request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository_pull_request#body RepositoryPullRequest#body}
  */
  readonly body?: string;
  /**
  * Name of the branch serving as the head of the Pull Request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository_pull_request#head_ref RepositoryPullRequest#head_ref}
  */
  readonly headRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository_pull_request#id RepositoryPullRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository_pull_request#maintainer_can_modify RepositoryPullRequest#maintainer_can_modify}
  */
  readonly maintainerCanModify?: boolean | cdktf.IResolvable;
  /**
  * Owner of the repository. If not provided, the provider's default owner is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository_pull_request#owner RepositoryPullRequest#owner}
  */
  readonly owner?: string;
  /**
  * The title of the Pull Request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository_pull_request#title RepositoryPullRequest#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository_pull_request github_repository_pull_request}
*/
export class RepositoryPullRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_pull_request";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository_pull_request github_repository_pull_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryPullRequestConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryPullRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_pull_request',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.37.0',
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
    this._baseRef = config.baseRef;
    this._baseRepository = config.baseRepository;
    this._body = config.body;
    this._headRef = config.headRef;
    this._id = config.id;
    this._maintainerCanModify = config.maintainerCanModify;
    this._owner = config.owner;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_ref - computed: false, optional: false, required: true
  private _baseRef?: string; 
  public get baseRef() {
    return this.getStringAttribute('base_ref');
  }
  public set baseRef(value: string) {
    this._baseRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRefInput() {
    return this._baseRef;
  }

  // base_repository - computed: false, optional: false, required: true
  private _baseRepository?: string; 
  public get baseRepository() {
    return this.getStringAttribute('base_repository');
  }
  public set baseRepository(value: string) {
    this._baseRepository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRepositoryInput() {
    return this._baseRepository;
  }

  // base_sha - computed: true, optional: false, required: false
  public get baseSha() {
    return this.getStringAttribute('base_sha');
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // draft - computed: true, optional: false, required: false
  public get draft() {
    return this.getBooleanAttribute('draft');
  }

  // head_ref - computed: false, optional: false, required: true
  private _headRef?: string; 
  public get headRef() {
    return this.getStringAttribute('head_ref');
  }
  public set headRef(value: string) {
    this._headRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headRefInput() {
    return this._headRef;
  }

  // head_sha - computed: true, optional: false, required: false
  public get headSha() {
    return this.getStringAttribute('head_sha');
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

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // maintainer_can_modify - computed: false, optional: true, required: false
  private _maintainerCanModify?: boolean | cdktf.IResolvable; 
  public get maintainerCanModify() {
    return this.getBooleanAttribute('maintainer_can_modify');
  }
  public set maintainerCanModify(value: boolean | cdktf.IResolvable) {
    this._maintainerCanModify = value;
  }
  public resetMaintainerCanModify() {
    this._maintainerCanModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainerCanModifyInput() {
    return this._maintainerCanModify;
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // opened_at - computed: true, optional: false, required: false
  public get openedAt() {
    return this.getNumberAttribute('opened_at');
  }

  // opened_by - computed: true, optional: false, required: false
  public get openedBy() {
    return this.getStringAttribute('opened_by');
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_ref: cdktf.stringToTerraform(this._baseRef),
      base_repository: cdktf.stringToTerraform(this._baseRepository),
      body: cdktf.stringToTerraform(this._body),
      head_ref: cdktf.stringToTerraform(this._headRef),
      id: cdktf.stringToTerraform(this._id),
      maintainer_can_modify: cdktf.booleanToTerraform(this._maintainerCanModify),
      owner: cdktf.stringToTerraform(this._owner),
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
