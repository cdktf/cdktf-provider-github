# `github_app_installation_repositories`

Refer to the Terraform Registory for docs: [`github_app_installation_repositories`](https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/app_installation_repositories).

# `appInstallationRepositories` Submodule <a name="`appInstallationRepositories` Submodule" id="@cdktf/provider-github.appInstallationRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppInstallationRepositories <a name="AppInstallationRepositories" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/app_installation_repositories github_app_installation_repositories}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer"></a>

```python
from cdktf_cdktf_provider_github import app_installation_repositories

appInstallationRepositories.AppInstallationRepositories(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  installation_id: str,
  selected_repositories: typing.List[str],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.installationId">installation_id</a></code> | <code>str</code> | The GitHub app installation id. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.selectedRepositories">selected_repositories</a></code> | <code>typing.List[str]</code> | A list of repository names to install the app on. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/app_installation_repositories#id AppInstallationRepositories#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `installation_id`<sup>Required</sup> <a name="installation_id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.installationId"></a>

- *Type:* str

The GitHub app installation id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/app_installation_repositories#installation_id AppInstallationRepositories#installation_id}

---

##### `selected_repositories`<sup>Required</sup> <a name="selected_repositories" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.selectedRepositories"></a>

- *Type:* typing.List[str]

A list of repository names to install the app on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/app_installation_repositories#selected_repositories AppInstallationRepositories#selected_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/app_installation_repositories#id AppInstallationRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import app_installation_repositories

appInstallationRepositories.AppInstallationRepositories.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import app_installation_repositories

appInstallationRepositories.AppInstallationRepositories.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import app_installation_repositories

appInstallationRepositories.AppInstallationRepositories.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.installationIdInput">installation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.selectedRepositoriesInput">selected_repositories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.installationId">installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.selectedRepositories">selected_repositories</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `installation_id_input`<sup>Optional</sup> <a name="installation_id_input" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.installationIdInput"></a>

```python
installation_id_input: str
```

- *Type:* str

---

##### `selected_repositories_input`<sup>Optional</sup> <a name="selected_repositories_input" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.selectedRepositoriesInput"></a>

```python
selected_repositories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `installation_id`<sup>Required</sup> <a name="installation_id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

---

##### `selected_repositories`<sup>Required</sup> <a name="selected_repositories" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.selectedRepositories"></a>

```python
selected_repositories: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppInstallationRepositoriesConfig <a name="AppInstallationRepositoriesConfig" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import app_installation_repositories

appInstallationRepositories.AppInstallationRepositoriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  installation_id: str,
  selected_repositories: typing.List[str],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.installationId">installation_id</a></code> | <code>str</code> | The GitHub app installation id. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.selectedRepositories">selected_repositories</a></code> | <code>typing.List[str]</code> | A list of repository names to install the app on. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/app_installation_repositories#id AppInstallationRepositories#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `installation_id`<sup>Required</sup> <a name="installation_id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

The GitHub app installation id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/app_installation_repositories#installation_id AppInstallationRepositories#installation_id}

---

##### `selected_repositories`<sup>Required</sup> <a name="selected_repositories" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.selectedRepositories"></a>

```python
selected_repositories: typing.List[str]
```

- *Type:* typing.List[str]

A list of repository names to install the app on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/app_installation_repositories#selected_repositories AppInstallationRepositories#selected_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/app_installation_repositories#id AppInstallationRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



