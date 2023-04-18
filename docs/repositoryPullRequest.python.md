# `github_repository_pull_request`

Refer to the Terraform Registory for docs: [`github_repository_pull_request`](https://www.terraform.io/docs/providers/github/r/repository_pull_request).

# `repositoryPullRequest` Submodule <a name="`repositoryPullRequest` Submodule" id="@cdktf/provider-github.repositoryPullRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryPullRequest <a name="RepositoryPullRequest" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request github_repository_pull_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_pull_request

repositoryPullRequest.RepositoryPullRequest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_ref: str,
  base_repository: str,
  head_ref: str,
  title: str,
  body: str = None,
  id: str = None,
  maintainer_can_modify: typing.Union[bool, IResolvable] = None,
  owner: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.baseRef">base_ref</a></code> | <code>str</code> | Name of the branch serving as the base of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.baseRepository">base_repository</a></code> | <code>str</code> | Name of the base repository to retrieve the Pull Requests from. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.headRef">head_ref</a></code> | <code>str</code> | Name of the branch serving as the head of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.title">title</a></code> | <code>str</code> | The title of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.body">body</a></code> | <code>str</code> | Body of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#id RepositoryPullRequest#id}. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.maintainerCanModify">maintainer_can_modify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Owner of the repository. If not provided, the provider's default owner is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_ref`<sup>Required</sup> <a name="base_ref" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.baseRef"></a>

- *Type:* str

Name of the branch serving as the base of the Pull Request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#base_ref RepositoryPullRequest#base_ref}

---

##### `base_repository`<sup>Required</sup> <a name="base_repository" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.baseRepository"></a>

- *Type:* str

Name of the base repository to retrieve the Pull Requests from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#base_repository RepositoryPullRequest#base_repository}

---

##### `head_ref`<sup>Required</sup> <a name="head_ref" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.headRef"></a>

- *Type:* str

Name of the branch serving as the head of the Pull Request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#head_ref RepositoryPullRequest#head_ref}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.title"></a>

- *Type:* str

The title of the Pull Request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#title RepositoryPullRequest#title}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.body"></a>

- *Type:* str

Body of the Pull Request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#body RepositoryPullRequest#body}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#id RepositoryPullRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintainer_can_modify`<sup>Optional</sup> <a name="maintainer_can_modify" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.maintainerCanModify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#maintainer_can_modify RepositoryPullRequest#maintainer_can_modify}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.owner"></a>

- *Type:* str

Owner of the repository. If not provided, the provider's default owner is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#owner RepositoryPullRequest#owner}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetMaintainerCanModify">reset_maintainer_can_modify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOwner">reset_owner</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_body` <a name="reset_body" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintainer_can_modify` <a name="reset_maintainer_can_modify" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetMaintainerCanModify"></a>

```python
def reset_maintainer_can_modify() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOwner"></a>

```python
def reset_owner() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import repository_pull_request

repositoryPullRequest.RepositoryPullRequest.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import repository_pull_request

repositoryPullRequest.RepositoryPullRequest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import repository_pull_request

repositoryPullRequest.RepositoryPullRequest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseSha">base_sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.draft">draft</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headSha">head_sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedAt">opened_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedBy">opened_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRefInput">base_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepositoryInput">base_repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRefInput">head_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModifyInput">maintainer_can_modify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRef">base_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepository">base_repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRef">head_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModify">maintainer_can_modify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.title">title</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_sha`<sup>Required</sup> <a name="base_sha" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseSha"></a>

```python
base_sha: str
```

- *Type:* str

---

##### `draft`<sup>Required</sup> <a name="draft" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.draft"></a>

```python
draft: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `head_sha`<sup>Required</sup> <a name="head_sha" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headSha"></a>

```python
head_sha: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opened_at`<sup>Required</sup> <a name="opened_at" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedAt"></a>

```python
opened_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opened_by`<sup>Required</sup> <a name="opened_by" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedBy"></a>

```python
opened_by: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base_ref_input`<sup>Optional</sup> <a name="base_ref_input" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRefInput"></a>

```python
base_ref_input: str
```

- *Type:* str

---

##### `base_repository_input`<sup>Optional</sup> <a name="base_repository_input" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepositoryInput"></a>

```python
base_repository_input: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `head_ref_input`<sup>Optional</sup> <a name="head_ref_input" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRefInput"></a>

```python
head_ref_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintainer_can_modify_input`<sup>Optional</sup> <a name="maintainer_can_modify_input" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModifyInput"></a>

```python
maintainer_can_modify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `base_ref`<sup>Required</sup> <a name="base_ref" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRef"></a>

```python
base_ref: str
```

- *Type:* str

---

##### `base_repository`<sup>Required</sup> <a name="base_repository" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepository"></a>

```python
base_repository: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `head_ref`<sup>Required</sup> <a name="head_ref" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRef"></a>

```python
head_ref: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintainer_can_modify`<sup>Required</sup> <a name="maintainer_can_modify" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModify"></a>

```python
maintainer_can_modify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.title"></a>

```python
title: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryPullRequestConfig <a name="RepositoryPullRequestConfig" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_pull_request

repositoryPullRequest.RepositoryPullRequestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_ref: str,
  base_repository: str,
  head_ref: str,
  title: str,
  body: str = None,
  id: str = None,
  maintainer_can_modify: typing.Union[bool, IResolvable] = None,
  owner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRef">base_ref</a></code> | <code>str</code> | Name of the branch serving as the base of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRepository">base_repository</a></code> | <code>str</code> | Name of the base repository to retrieve the Pull Requests from. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.headRef">head_ref</a></code> | <code>str</code> | Name of the branch serving as the head of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.title">title</a></code> | <code>str</code> | The title of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.body">body</a></code> | <code>str</code> | Body of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#id RepositoryPullRequest#id}. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.maintainerCanModify">maintainer_can_modify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.owner">owner</a></code> | <code>str</code> | Owner of the repository. If not provided, the provider's default owner is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_ref`<sup>Required</sup> <a name="base_ref" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRef"></a>

```python
base_ref: str
```

- *Type:* str

Name of the branch serving as the base of the Pull Request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#base_ref RepositoryPullRequest#base_ref}

---

##### `base_repository`<sup>Required</sup> <a name="base_repository" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRepository"></a>

```python
base_repository: str
```

- *Type:* str

Name of the base repository to retrieve the Pull Requests from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#base_repository RepositoryPullRequest#base_repository}

---

##### `head_ref`<sup>Required</sup> <a name="head_ref" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.headRef"></a>

```python
head_ref: str
```

- *Type:* str

Name of the branch serving as the head of the Pull Request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#head_ref RepositoryPullRequest#head_ref}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the Pull Request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#title RepositoryPullRequest#title}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.body"></a>

```python
body: str
```

- *Type:* str

Body of the Pull Request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#body RepositoryPullRequest#body}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#id RepositoryPullRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintainer_can_modify`<sup>Optional</sup> <a name="maintainer_can_modify" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.maintainerCanModify"></a>

```python
maintainer_can_modify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#maintainer_can_modify RepositoryPullRequest#maintainer_can_modify}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Owner of the repository. If not provided, the provider's default owner is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request#owner RepositoryPullRequest#owner}

---



