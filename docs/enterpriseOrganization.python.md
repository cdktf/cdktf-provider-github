# `github_enterprise_organization`

Refer to the Terraform Registory for docs: [`github_enterprise_organization`](https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization).

# `enterpriseOrganization` Submodule <a name="`enterpriseOrganization` Submodule" id="@cdktf/provider-github.enterpriseOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseOrganization <a name="EnterpriseOrganization" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization github_enterprise_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer"></a>

```python
from cdktf_cdktf_provider_github import enterprise_organization

enterpriseOrganization.EnterpriseOrganization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_logins: typing.List[str],
  billing_email: str,
  enterprise_id: str,
  name: str,
  description: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.adminLogins">admin_logins</a></code> | <code>typing.List[str]</code> | List of organization owner usernames. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.billingEmail">billing_email</a></code> | <code>str</code> | The billing email address. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.enterpriseId">enterprise_id</a></code> | <code>str</code> | The ID of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization#id EnterpriseOrganization#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_logins`<sup>Required</sup> <a name="admin_logins" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.adminLogins"></a>

- *Type:* typing.List[str]

List of organization owner usernames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization#admin_logins EnterpriseOrganization#admin_logins}

---

##### `billing_email`<sup>Required</sup> <a name="billing_email" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.billingEmail"></a>

- *Type:* str

The billing email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization#billing_email EnterpriseOrganization#billing_email}

---

##### `enterprise_id`<sup>Required</sup> <a name="enterprise_id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.enterpriseId"></a>

- *Type:* str

The ID of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization#enterprise_id EnterpriseOrganization#enterprise_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.name"></a>

- *Type:* str

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization#name EnterpriseOrganization#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.description"></a>

- *Type:* str

The description of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization#description EnterpriseOrganization#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization#id EnterpriseOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import enterprise_organization

enterpriseOrganization.EnterpriseOrganization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import enterprise_organization

enterpriseOrganization.EnterpriseOrganization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import enterprise_organization

enterpriseOrganization.EnterpriseOrganization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLoginsInput">admin_logins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmailInput">billing_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseIdInput">enterprise_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLogins">admin_logins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmail">billing_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseId">enterprise_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_logins_input`<sup>Optional</sup> <a name="admin_logins_input" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLoginsInput"></a>

```python
admin_logins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `billing_email_input`<sup>Optional</sup> <a name="billing_email_input" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmailInput"></a>

```python
billing_email_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enterprise_id_input`<sup>Optional</sup> <a name="enterprise_id_input" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseIdInput"></a>

```python
enterprise_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `admin_logins`<sup>Required</sup> <a name="admin_logins" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLogins"></a>

```python
admin_logins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `billing_email`<sup>Required</sup> <a name="billing_email" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmail"></a>

```python
billing_email: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enterprise_id`<sup>Required</sup> <a name="enterprise_id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseId"></a>

```python
enterprise_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseOrganizationConfig <a name="EnterpriseOrganizationConfig" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import enterprise_organization

enterpriseOrganization.EnterpriseOrganizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_logins: typing.List[str],
  billing_email: str,
  enterprise_id: str,
  name: str,
  description: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.adminLogins">admin_logins</a></code> | <code>typing.List[str]</code> | List of organization owner usernames. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.billingEmail">billing_email</a></code> | <code>str</code> | The billing email address. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.enterpriseId">enterprise_id</a></code> | <code>str</code> | The ID of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.name">name</a></code> | <code>str</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.description">description</a></code> | <code>str</code> | The description of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization#id EnterpriseOrganization#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_logins`<sup>Required</sup> <a name="admin_logins" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.adminLogins"></a>

```python
admin_logins: typing.List[str]
```

- *Type:* typing.List[str]

List of organization owner usernames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization#admin_logins EnterpriseOrganization#admin_logins}

---

##### `billing_email`<sup>Required</sup> <a name="billing_email" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.billingEmail"></a>

```python
billing_email: str
```

- *Type:* str

The billing email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization#billing_email EnterpriseOrganization#billing_email}

---

##### `enterprise_id`<sup>Required</sup> <a name="enterprise_id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.enterpriseId"></a>

```python
enterprise_id: str
```

- *Type:* str

The ID of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization#enterprise_id EnterpriseOrganization#enterprise_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization#name EnterpriseOrganization#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization#description EnterpriseOrganization#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.27.0/docs/resources/enterprise_organization#id EnterpriseOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



